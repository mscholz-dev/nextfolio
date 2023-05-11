import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import fs from "fs";
import path from "path";
import ToolClass from "@/utils/Tool";

// classes
const Tool = new ToolClass();

const img = (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const file = Tool.readFileServerless(
    "emails/contact/request.html",
  );

  res.send(fs.readFileSync(file));
  // const dirRelativeToPublicFolder = "img";
  // const dir = path.resolve(
  //   "./public",
  //   dirRelativeToPublicFolder,
  // );
  // const filenames = fs.readdirSync(dir);
  // const images = filenames.map((name) =>
  //   path.join(
  //     "/",
  //     dirRelativeToPublicFolder,
  //     name,
  //   ),
  // );
  // res.statusCode = 200;
  // res.json(images);
};

export default img;
