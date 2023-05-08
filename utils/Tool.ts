import { readFileSync } from "fs";
import path from "path";

export default class Tool {
  readFileSync(filePath: string[]): string {
    console.log(process.cwd());
    return readFileSync(
      path.join(process.cwd(), ...filePath),
      "utf8",
    );
  }
}
