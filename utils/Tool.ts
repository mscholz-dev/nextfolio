import { readFileSync } from "fs";
import path from "path";

export default class Tool {
  readFileSync(filePath: string[]): string {
    return readFileSync(
      path.join(process.cwd(), ...filePath),
      "utf8",
    );
  }
}
