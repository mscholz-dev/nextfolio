import axios from "axios";
import { AxiosError } from "axios";

export default class InternalError {
  async UnexpectedError(
    referer: string,
    err: any,
  ) {
    await axios.post(
      `https://discord.com/api/webhooks/${process.env.WEBHOOK_500}`,
      {
        content: `
**Service:** ${referer}
**Erreur :** ${
          err instanceof AxiosError
            ? err.stack
            : err
        }
          `,
      },
    );
  }
}
