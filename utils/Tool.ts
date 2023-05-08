import { URL } from "url";

export default class Tool {
  filePath(filePath: string): string {
    return new URL(filePath, import.meta.url)
      .pathname;
  }
}
