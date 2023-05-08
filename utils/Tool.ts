import { readFileSync } from "fs";
import path from "path";

export default class Tool {
  readFileSync(file: string): string {
    return readFileSync(file, "utf8");
  }
}
