import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import axios from "axios";
import ContactValidatorClass from "@/utils/validators/ContactValidator";
import InternalErrorClass from "@/utils/InternalError";

// classes
const ContactValidator =
  new ContactValidatorClass();
const InternalError = new InternalErrorClass();

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

      // create discord contact request
      await axios.post(
        `https://discord.com/api/webhooks/${process.env.WEBHOOK_CONTACT}`,
        {
          content: `
**Nom et prénom :** ${fullName}
**Email :** ${email}
**Numéro de téléphone :** ${phone}
**Sujet :** ${subject}
**Message :**
${message}
          `,
        },
      );

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
