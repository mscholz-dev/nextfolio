import nodemailer from "nodemailer";
import fs from "fs";
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
    token: string,
  ): Promise<void> {
    // get template
    const fileClient = fs
      .readFileSync(
        Tool.readFileServerless(
          "emails/newsletter/subscribe.html",
        ),
      )
      .toString();

    const fileHtmlClient = fileClient
      .replace("$email", email)
      .replace("$token", token);

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
    token,
  }: TContactData & {
    token: string;
  }): Promise<void> {
    // get template
    const fileClient = fs
      .readFileSync(
        Tool.readFileServerless(
          "emails/contact/request.html",
        ),
      )
      .toString();

    const fileHtmlClient = fileClient
      .replace("$fullName", fullName)
      .replace("$email", email)
      .replace("$phone", phone || "non renseigné")
      .replace("$subject", subject)
      .replace("$message", message)
      .replace(
        "$consent",
        consent ? "Oui" : "Non",
      )
      .replace("$token", token);

    await this.send(
      email,
      "RÉCAPITULATIF DE LA DEMANDE DE CONTACT",
      fileHtmlClient,
    );

    return;
  }
}
