import fs from "fs";
import nodemailer from "nodemailer";
import ToolClass from "@/utils/Tool";

// types
import { TContactData } from "@/utils/types";

// classes
const Tool = new ToolClass();

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
    const fileClient = Tool.readFileSync([
      process.env.NODEENV === "prod"
        ? ""
        : "public",
      "emails",
      "fr",
      "newsletter",
      "subscribe.html",
    ]);

    const fileHtmlClient = fileClient.replace(
      "$email",
      email,
    );

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
    const fileClient = Tool.readFileSync([
      process.env.NODEENV === "prod"
        ? ""
        : "public",
      "emails",
      "fr",
      "contact",
      "request.html",
    ]);

    const fileHtmlClient = fileClient
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
