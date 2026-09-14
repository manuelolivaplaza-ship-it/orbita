import { assertBot } from "@/lib/bot-auth";
import { markReply } from "@/lib/db";

export async function POST(req: Request) {
  const denied = await assertBot(req);
  if (denied) return denied;
  try {
    const body = (await req.json()) as {
      id?: string;
      text?: string;
      fecha_respuesta?: string;
    };
    if (!body.id) {
      return Response.json({ error: "id requerido" }, { status: 400 });
    }
    const at = body.fecha_respuesta ? new Date(body.fecha_respuesta) : new Date();
    const lead = await markReply(body.id, body.text, at);
    return Response.json({ ok: true, lead });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Error" },
      { status: 400 },
    );
  }
}
