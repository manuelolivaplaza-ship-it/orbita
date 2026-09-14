import { assertBot } from "@/lib/bot-auth";
import { markSent } from "@/lib/db";

export async function POST(req: Request) {
  const denied = await assertBot(req);
  if (denied) return denied;
  try {
    const body = (await req.json()) as { id?: string; fecha_envio?: string };
    if (!body.id) {
      return Response.json({ error: "id requerido" }, { status: 400 });
    }
    const at = body.fecha_envio ? new Date(body.fecha_envio) : new Date();
    const lead = await markSent(body.id, at);
    return Response.json({ ok: true, lead });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Error" },
      { status: 400 },
    );
  }
}
