import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import axios from "axios";
import ContactValidatorClass from "@/utils/validators/ContactValidator";
import InternalErrorClass from "@/utils/InternalError";
import EmailClass from "@/utils/Email";
import MongoDBClass from "@/utils/MongoDB";
import SecurityClass from "@/utils/Security";

// classes
const ContactValidator =
  new ContactValidatorClass();
const InternalError = new InternalErrorClass();
const Email = new EmailClass();
const MongoDB = new MongoDBClass();
const Security = new SecurityClass();

const contact = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> => {
  try {
    // POST request
    if (req.method === "POST") {
      const {
        fullName,
        email,
        phone,
        subject,
        message,
        consent,
      } = req.body;

      // validate data
      const errors =
        ContactValidator.inspectContactData({
          fullName,
          email,
          phone,
          subject,
          message,
          consent,
        });

      // throw errors
      if (errors.length)
        return res
          .status(400)
          .json({ err: errors });

      // store contact request in mongoDB
      const client =
        await MongoDB.clientPromise();
      const db = client.db(
        `portfolio${
          process.env.NODEENV === "dev"
            ? "_dev"
            : ""
        }`,
      );

      // same datetime
      const newDate = new Date();

      // create UUID
      const uuid = Security.createUUID();

      await db.collection("contact").insertOne({
        token: uuid,
        fullName,
        email,
        phone: phone ? phone : null,
        subject,
        message,
        consent,
        created_at: newDate,
        updated_at: newDate,
      });

      // send contact request email
      await Email.contactRequestTemplate({
        fullName,
        email,
        phone,
        subject,
        message,
        consent,
        token: uuid,
      });

      // create discord contact-log request
      await axios.post(
        `https://discord.com/api/webhooks/${process.env.WEBHOOK_CONTACT}`,
        {
          content: `
**Nouvelle demande de contact :** ${uuid}
          `,
        },
      );

      // return empty response
      return res.status(200).end();
    }

    // DELETE request
    if (req.method === "DELETE") {
      const { token } = req.query;

      // prevent non string value
      if (typeof token !== "string")
        return res.status(400).json({
          err: "Le champ Jeton est invalide",
        });

      // validate data
      const errors =
        ContactValidator.inspectDeleteData(token);

      // throw errors
      if (errors.length)
        return res
          .status(400)
          .json({ err: errors });

      // delete contact request in mongoDB
      const client =
        await MongoDB.clientPromise();
      const db = client.db(
        `portfolio${
          process.env.NODEENV === "dev"
            ? "_dev"
            : ""
        }`,
      );

      const { deletedCount } = await db
        .collection("contact")
        .deleteOne({
          token,
        });

      // contact request really deleted ?
      if (deletedCount !== 0) {
        // create discord contact-log request
        await axios.post(
          `https://discord.com/api/webhooks/${process.env.WEBHOOK_CONTACT_LOG}`,
          {
            content: `
    **Suppression de la demande de contact :** ${token}
                  `,
          },
        );
      }

      // return empty response
      return res.status(200).end();
    }
  } catch (err: unknown) {
    // create discord 500 request
    await InternalError.UnexpectedError(
      "api/contact",
      err,
    );

    // return error response
    return res.status(400).json({
      err: err,
    });
  }
};

export default contact;
