import { createHmac, timingSafeEqual } from "crypto";

export const ATELIER_COOKIE = "atelier";

function secret() {
  return process.env.CV_GATE_SECRET || process.env.CV_PIN || "portfolio-atelier-dev";
}

export function expectedPin() {
  return process.env.CV_PIN || "428604";
}

export function atelierToken() {
  return createHmac("sha256", secret()).update("atelier-ok").digest("hex");
}

export function isAtelierToken(value: string | undefined) {
  if (!value) return false;
  const expected = atelierToken();
  try {
    const a = Buffer.from(value);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
