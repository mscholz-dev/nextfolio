import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import fs from "fs";
import path from "path";

const img = (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const dirRelativeToPublicFolder = "img";

  const dir = path.resolve(
    "./public",
    dirRelativeToPublicFolder,
  );

  const filenames = fs.readdirSync(dir);

  const images = filenames.map((name) =>
    path.join(
      "/",
      dirRelativeToPublicFolder,
      name,
    ),
  );

  res.statusCode = 200;
  res.json(images);
};

export default img;
