import * as crypto from "crypto";

export function getName() {
  const bytes = crypto.randomBytes(8);
  return bytes.toString("hex");
}
