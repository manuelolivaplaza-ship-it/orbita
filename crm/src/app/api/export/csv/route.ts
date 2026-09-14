import { assertSessionOrBot } from "@/lib/bot-auth";
import { leadsToCsv } from "@/lib/csv";
import { getHoyQueue, listLeads } from "@/lib/db";

export async function GET(req: Request) {
  const denied = await assertSessionOrBot(req);
  if (denied) return denied;
  const url = new URL(req.url);
  const scope = url.searchParams.get("scope") ?? "hoy";
  const leads =
    scope === "all"
      ? await listLeads()
      : await (async () => {
          const q = await getHoyQueue();
          return [...q.inbound, ...q.followups, ...q.nuevos];
        })();
  const csv = leadsToCsv(leads);
  const name = `reclu-${scope}-${new Date().toISOString().slice(0, 10)}.csv`;
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${name}"`,
    },
  });
}
