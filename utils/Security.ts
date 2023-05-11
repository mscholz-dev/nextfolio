import { randomUUID } from "crypto";

export default class Security {
  createUUID(): string {
    return randomUUID();
  }
}
