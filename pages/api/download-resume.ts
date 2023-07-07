import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import axios from "axios";
import InternalErrorClass from "@/utils/InternalError";
import MongoDBClass from "@/utils/MongoDB";

// classes
const InternalError = new InternalErrorClass();
const MongoDB = new MongoDBClass();

const downloadResume = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> => {
  try {
    // POST request
    if (req.method === "POST") {
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

      await db
        .collection("download_resume")
        .insertOne({
          created_at: newDate,
        });

      // create discord download-resume-log request
      await axios.post(
        `https://discord.com/api/webhooks/${process.env.WEBHOOK_DOWNLOAD_RESUME_LOG}`,
        {
          content: `
**Nouveau téléchargement du CV**
          `,
        },
      );

      // return empty response
      return res.status(200).end();
    }
  } catch (err: unknown) {
    // create discord 500 request
    await InternalError.UnexpectedError(
      "api/download-resume",
      err,
    );

    // return error response
    return res.status(400).json({
      err: err,
    });
  }
};

export default downloadResume;
