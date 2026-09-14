import { KanbanBoard } from "@/components/kanban-board";
import { SetupHint } from "@/components/setup-hint";
import { listLeads } from "@/lib/db";
import { isConfigured } from "@/lib/supabase";

export default async function PipelinePage() {
  if (!isConfigured()) {
    return <SetupHint error="Faltan keys de Supabase" />;
  }
  try {
    const leads = await listLeads();
    return (
      <div className="space-y-4">
        <div>
          <h1 className="font-heading text-lg font-medium">Pipeline</h1>
          <p className="text-sm text-muted-foreground">
            Arrastra entre columnas. Ganado pide seña. Perdido pide motivo.
          </p>
        </div>
        <KanbanBoard leads={leads} />
      </div>
    );
  } catch (e) {
    return <SetupHint error={e instanceof Error ? e.message : "Error"} />;
  }
}
