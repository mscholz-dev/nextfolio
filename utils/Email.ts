import nodemailer from "nodemailer";
import MongoDBClass from "@/utils/MongoDB";

// types
import { TContactData } from "@/utils/types";

// classes
const MongoDB = new MongoDBClass();

export default class Email {
  send(
    emailDest: string,
    emailSubject: string,
    emailMessageHtml: string,
  ) {
    return new Promise(async (resolve, __) => {
      const transporter =
        nodemailer.createTransport({
          host:
            String(process.env.MAILER_HOST) || "",
          port:
            Number(process.env.MAILER_PORT) || 0,
          secure: true,
          auth: {
            user:
              String(process.env.MAILER_USER) ||
              "",
            pass:
              String(
                process.env.MAILER_PASSWORD,
              ) || "",
          },
          service: "gmail",
        });

      const info = await transporter.sendMail({
        from: process.env.MAILER_USER as string,
        to: emailDest,
        subject: `mscholz.dev • ${emailSubject}`,
        text: "",
        html: emailMessageHtml,
      });

      resolve(info);
    });
  }

  async newsletterSubscribeTemplate(
    email: string,
  ): Promise<void> {
    // get template_email
    const client = await MongoDB.clientPromise();
    const db = client.db(
      `portfolio${
        process.env.NODEENV === "dev"
          ? "_dev"
          : ""
      }`,
    );

    const mongoFile = await db
      .collection("template_email")
      .findOne(
        {
          name: "newsletter_subscribe",
        },
        {
          projection: {
            template: 1,
          },
        },
      );

    if (typeof mongoFile?.template !== "string")
      throw "template email not found";

    const fileHtmlClient =
      mongoFile.template.replace("$email", email);

    await this.send(
      email,
      "ABONNEMENT À LA NEWSLETTER DE MORGAN SCHOLZ",
      fileHtmlClient,
    );

    return;
  }

  async contactRequestTemplate({
    fullName,
    email,
    phone,
    subject,
    message,
    consent,
  }: TContactData): Promise<void> {
    // get template_email
    const client = await MongoDB.clientPromise();
    const db = client.db(
      `portfolio${
        process.env.NODEENV === "dev"
          ? "_dev"
          : ""
      }`,
    );

    const mongoFile = await db
      .collection("template_email")
      .findOne(
        {
          name: "contact_request",
        },
        {
          projection: {
            template: 1,
          },
        },
      );

    if (typeof mongoFile?.template !== "string")
      throw "template email not found";

    const fileHtmlClient = mongoFile.template
      .replace("$fullName", fullName)
      .replace("$email", email)
      .replace("$phone", phone || "non renseigné")
      .replace("$subject", subject)
      .replace("$message", message)
      .replace(
        "$consent",
        consent ? "Oui" : "Non",
      );

    await this.send(
      email,
      "RÉCAPITULATIF DE LA DEMANDE DE CONTACT",
      fileHtmlClient,
    );

    return;
  }
}
