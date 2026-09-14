import { HoyBoard } from "@/components/hoy-board";
import { ImportCsv } from "@/components/import-csv";
import { SetupHint } from "@/components/setup-hint";
import { Button } from "@/components/ui/button";
import { getHoyQueue } from "@/lib/db";
import { isConfigured } from "@/lib/supabase";

export default async function HoyPage() {
  if (!isConfigured()) {
    return <SetupHint error="Faltan keys de Supabase" />;
  }
  try {
    const q = await getHoyQueue();
    return (
      <div className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-heading text-lg font-medium">Hoy</h1>
            <p className="text-sm text-muted-foreground">
              {q.today} · {q.timezone} · cap nuevos {q.cap}
            </p>
          </div>
          <div className="flex gap-2">
            <ImportCsv />
            <Button asChild variant="outline" size="sm">
              <a href="/api/export/csv?scope=hoy">Exportar CSV batch</a>
            </Button>
          </div>
        </div>
        <HoyBoard
          followups={q.followups}
          nuevos={q.nuevos}
          inbound={q.inbound}
          today={q.today}
          cap={q.cap}
        />
      </div>
    );
  } catch (e) {
    return <SetupHint error={e instanceof Error ? e.message : "Error"} />;
  }
}
