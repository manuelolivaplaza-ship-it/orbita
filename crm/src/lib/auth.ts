import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { COOKIE_NAME } from "./constants";

export function sessionToken(): string {
  const pass = process.env.CRM_APP_PASSWORD ?? "";
  const secret =
    process.env.CRM_SESSION_SECRET || process.env.CRM_BOT_KEY || "reclu-dev";
  return createHmac("sha256", secret).update(`reclu-crm:${pass}`).digest("hex");
}

export function tokenMatches(value: string | undefined | null): boolean {
  if (!value || !process.env.CRM_APP_PASSWORD) return false;
  const expected = sessionToken();
  const a = Buffer.from(value);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function isLoggedIn(): Promise<boolean> {
  const jar = await cookies();
  return tokenMatches(jar.get(COOKIE_NAME)?.value);
}

export async function requireSession(): Promise<void> {
  if (!(await isLoggedIn())) {
    throw new Error("No autorizado");
  }
}

export function cookieOptions() {
  return {
    httpOnly: true as const,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  };
}

export function extractBotKey(req: Request): string | null {
  const header = req.headers.get("authorization");
  if (header?.toLowerCase().startsWith("bearer ")) {
    return header.slice(7).trim();
  }
  return req.headers.get("x-crm-bot-key")?.trim() || null;
}
