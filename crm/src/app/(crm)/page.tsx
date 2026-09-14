import Link from "next/link";
import { SetupHint } from "@/components/setup-hint";
import { StatusBadge } from "@/components/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PIPELINE_STATUSES, SIDE_STATUSES } from "@/lib/types";
import { formatClp } from "@/lib/format";
import { getKpis } from "@/lib/db";
import { isConfigured } from "@/lib/supabase";

function Kpi({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <Card size="sm">
      <CardHeader>
        <CardTitle className="text-xs font-normal text-muted-foreground">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-heading text-2xl font-medium tracking-tight">{value}</p>
        {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
      </CardContent>
    </Card>
  );
}

export default async function DashboardPage() {
  if (!isConfigured()) {
    return <SetupHint error="Faltan NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY" />;
  }
  try {
    const k = await getKpis();
    return (
      <div className="space-y-6">
        <div>
          <h1 className="font-heading text-lg font-medium">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Web inbound + outbound · America/Santiago
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi label="Enviados hoy" value={String(k.enviadosHoy)} />
          <Kpi
            label="Respuestas hoy"
            value={String(k.respuestasHoy)}
            hint={`tasa ${k.tasaRespuesta}%`}
          />
          <Kpi label="Pipeline" value={formatClp(k.pipelineMonto)} />
          <Kpi
            label="Ganado"
            value={formatClp(k.ganadoMonto)}
            hint="solo con seña"
          />
          <Kpi
            label="Follow-ups vencidos"
            value={String(k.followupsVencidos)}
            hint="ir a /hoy"
          />
          <Kpi
            label="Entrantes web"
            value={String(k.inboundAbiertos)}
            hint="cotización / contacto / reunión"
          />
          <Kpi label="Nuevos outbound" value={String(k.nuevos)} />
          <Kpi label="Enviados (total)" value={String(k.enviados)} />
          <Kpi label="Leads" value={String(k.total)} />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Por estado</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {[...PIPELINE_STATUSES, ...SIDE_STATUSES].map((s) => (
              <Link
                key={s}
                href={`/leads?status=${s}`}
                className="flex items-center gap-2 rounded-lg px-2 py-1 ring-1 ring-foreground/10"
              >
                <StatusBadge status={s} />
                <span className="font-mono text-xs">{k.byStatus[s]}</span>
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  } catch (e) {
    return <SetupHint error={e instanceof Error ? e.message : "Error"} />;
  }
}
