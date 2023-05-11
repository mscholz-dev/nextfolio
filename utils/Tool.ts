import path from "path";

export default class Tool {
  readFileServerless(fullPath: string) {
    return path.resolve("./public", fullPath);
  }
}
