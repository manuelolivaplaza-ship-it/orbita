import { extractBotKey, tokenMatches } from "./auth";
import { resolveBotKey } from "./settings";

export async function assertBot(req: Request): Promise<Response | null> {
  const presented = extractBotKey(req);
  const expected = await resolveBotKey();
  if (!expected) {
    return Response.json(
      { error: "CRM_BOT_KEY no configurada" },
      { status: 500 },
    );
  }
  if (!presented || presented !== expected) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }
  return null;
}

export async function assertSessionOrBot(req: Request): Promise<Response | null> {
  const cookie = req.headers
    .get("cookie")
    ?.split(";")
    .map((p) => p.trim())
    .find((p) => p.startsWith("reclu_crm="));
  const value = cookie?.slice("reclu_crm=".length);
  if (tokenMatches(decodeURIComponent(value || ""))) return null;
  return assertBot(req);
}
