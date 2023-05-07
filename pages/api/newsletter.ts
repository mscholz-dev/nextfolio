import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import axios from "axios";
import NewsletterValidatorClass from "@/utils/validators/NewsletterValidator";
import InternalErrorClass from "@/utils/InternalError";
import EmailClass from "@/utils/email/Email";

// classes
const NewsletterValidator =
  new NewsletterValidatorClass();
const InternalError = new InternalErrorClass();
const Email = new EmailClass();

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

      // create discord newsletter-email request
      await axios.post(
        `https://discord.com/api/webhooks/${process.env.WEBHOOK_NEWSLETTER_EMAIL}`,
        {
          content: `
**Email :** ${newsletter}
              `,
        },
      );

      // create discord newsletter-log request (create this log to know all users registred, even if someone unsubscribe)
      await axios.post(
        `https://discord.com/api/webhooks/${process.env.WEBHOOK_NEWSLETTER_LOG}`,
        {
          content: `
**Nouvelle abonnement**
              `,
        },
      );

      // send subscribe email
      await Email.newsletterSubscribeTemplate(
        newsletter,
      );

      // return empty response
      return res.status(200).end();
    }

    // DELETE request
    if (req.method === "DELETE") {
      const { email } = req.query;

      // prevent non string value
      if (typeof email !== "string")
        return res.status(400).json({
          err: "Le champ Email est invalide",
        });

      // validate data
      const errors =
        NewsletterValidator.inspectNewsletterData(
          { newsletter: email },
        );

      // throw errors
      if (errors.length)
        return res
          .status(400)
          .json({ err: errors });

      // create discord newsletter-log request
      await axios.post(
        `https://discord.com/api/webhooks/${process.env.WEBHOOK_NEWSLETTER_LOG}`,
        {
          content: `
**Suppression d'abonnement :** ${email}
              `,
        },
      );

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
