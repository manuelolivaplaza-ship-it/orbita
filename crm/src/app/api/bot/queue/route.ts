import { assertBot } from "@/lib/bot-auth";
import { getHoyQueue } from "@/lib/db";

export async function GET(req: Request) {
  const denied = await assertBot(req);
  if (denied) return denied;
  try {
    const queue = await getHoyQueue();
    return Response.json({
      timezone: queue.timezone,
      today: queue.today,
      cap: queue.cap,
      followups: queue.followups,
      nuevos: queue.nuevos,
      inbound: queue.inbound,
      total: queue.followups.length + queue.nuevos.length + queue.inbound.length,
    });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Error" },
      { status: 500 },
    );
  }
}
