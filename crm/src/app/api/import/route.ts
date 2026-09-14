import { assertSessionOrBot } from "@/lib/bot-auth";
import { parseCsv } from "@/lib/csv";
import { upsertLeads } from "@/lib/db";

export async function POST(req: Request) {
  const denied = await assertSessionOrBot(req);
  if (denied) return denied;
  try {
    const ctype = req.headers.get("content-type") ?? "";
    let text = "";
    if (ctype.includes("multipart/form-data")) {
      const form = await req.formData();
      const file = form.get("file");
      if (file instanceof File) text = await file.text();
      else text = String(form.get("csv") ?? "");
    } else if (ctype.includes("text/csv") || ctype.includes("text/plain")) {
      text = await req.text();
    } else {
      const body = (await req.json()) as { csv?: string };
      text = body.csv ?? "";
    }
    const parsed = parseCsv(text);
    const result = await upsertLeads(parsed.rows);
    return Response.json({
      ok: result.errors.length === 0,
      upserted: result.upserted,
      skipped: parsed.skipped,
      errors: result.errors,
      headers: parsed.headers,
    });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Error" },
      { status: 400 },
    );
  }
}
