import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import axios from "axios";
import NewsletterValidatorClass from "@/utils/validators/NewsletterValidator";
import InternalErrorClass from "@/utils/InternalError";
import EmailClass from "@/utils/Email";
import MongoDBClass from "@/utils/MongoDB";
import SecurityClass from "@/utils/Security";

// classes
const NewsletterValidator =
  new NewsletterValidatorClass();
const InternalError = new InternalErrorClass();
const Email = new EmailClass();
const MongoDB = new MongoDBClass();
const Security = new SecurityClass();

const newsletter = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> => {
  try {
    // POST request
    if (req.method === "POST") {
      const { newsletter } = req.body;

      // validate data
      const errors =
        NewsletterValidator.inspectNewsletterData(
          { newsletter },
        );

      // throw errors
      if (errors.length)
        return res
          .status(400)
          .json({ err: errors });

      // store email in mongoDB
      const client =
        await MongoDB.clientPromise();
      const db = client.db(
        `portfolio${
          process.env.NODEENV === "dev"
            ? "_dev"
            : ""
        }`,
      );

      // search existing email
      const newsletterId = await db
        .collection("newsletter")
        .findOne(
          { email: newsletter },
          { projection: { _id: 1 } },
        );

      // email doesn't exist
      if (newsletterId === null) {
        // same datetime
        const newDate = new Date();

        // create uuid
        const uuid = Security.createUUID();

        await db
          .collection("newsletter")
          .insertOne({
            token: uuid,
            email: newsletter,
            created_at: newDate,
            updated_at: newDate,
          });

        // send subscribe email
        await Email.newsletterSubscribeTemplate(
          newsletter,
          uuid,
        );

        // create discord newsletter-log request
        await axios.post(
          `https://discord.com/api/webhooks/${process.env.WEBHOOK_NEWSLETTER_LOG}`,
          {
            content: `
  **Nouvelle abonnement :** ${uuid}
                `,
          },
        );
      }

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
        NewsletterValidator.inspectUnsubscribeData(
          token,
        );

      // throw errors
      if (errors.length)
        return res
          .status(400)
          .json({ err: errors });

      // delete email in mongoDB
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
        .collection("newsletter")
        .deleteOne({
          token,
        });

      // email really deleted ?
      if (deletedCount !== 0) {
        // create discord newsletter-log request
        await axios.post(
          `https://discord.com/api/webhooks/${process.env.WEBHOOK_NEWSLETTER_LOG}`,
          {
            content: `
    **Suppression d'abonnement :** ${token}
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
      "api/newsletter",
      err,
    );

    // return error response
    return res.status(400).json({
      err: err,
    });
  }
};

export default newsletter;
