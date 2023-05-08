import fs from "fs";
import nodemailer from "nodemailer";

// types

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
    const fileClient = fs
      .readFileSync(
        "./utils/email/fr/newsletter/subscribe.html",
      )
      .toString();

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
}
