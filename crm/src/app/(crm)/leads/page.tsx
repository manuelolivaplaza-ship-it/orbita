import Link from "next/link";
import { ImportCsv } from "@/components/import-csv";
import { SetupHint } from "@/components/setup-hint";
import { StatusMenu } from "@/components/status-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ALL_STATUSES } from "@/lib/types";
import type { LeadStatus } from "@/lib/types";
import { STATUS_LABEL } from "@/lib/constants";
import { formatClp } from "@/lib/format";
import { displayWa } from "@/lib/phone";
import { SourceBadge } from "@/components/source-badge";
import { listLeads } from "@/lib/db";
import { isConfigured } from "@/lib/supabase";

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    status?: string;
    comuna?: string;
    rubro?: string;
    dia_lote?: string;
    source?: string;
  }>;
}) {
  if (!isConfigured()) {
    return <SetupHint error="Faltan keys de Supabase" />;
  }
  const sp = await searchParams;
  const status = (sp.status as LeadStatus | undefined) ?? "all";
  try {
    const leads = await listLeads({
      q: sp.q,
      status: status === "all" ? "all" : status,
      comuna: sp.comuna,
      rubro: sp.rubro,
      dia_lote: sp.dia_lote ? Number(sp.dia_lote) : undefined,
      source: sp.source || "all",
    });
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-heading text-lg font-medium">Leads</h1>
            <p className="text-sm text-muted-foreground">{leads.length} filas</p>
          </div>
          <div className="flex gap-2">
            <ImportCsv />
            <Button asChild variant="outline" size="sm">
              <a href="/api/export/csv?scope=all">Exportar todo</a>
            </Button>
          </div>
        </div>

        <form className="flex flex-wrap gap-2" action="/leads">
          <Input
            name="q"
            placeholder="Buscar nombre, email, WA…"
            defaultValue={sp.q ?? ""}
            className="h-8 w-56"
          />
          <select
            name="status"
            defaultValue={status}
            className="h-8 rounded-lg border border-input bg-transparent px-2 text-sm"
          >
            <option value="all">Todos</option>
            {ALL_STATUSES.map((s) => (
              <option key={s} value={s}>
                {STATUS_LABEL[s]}
              </option>
            ))}
          </select>
          <Input
            name="comuna"
            placeholder="Comuna"
            defaultValue={sp.comuna ?? ""}
            className="h-8 w-36"
          />
          <Input
            name="rubro"
            placeholder="Rubro"
            defaultValue={sp.rubro ?? ""}
            className="h-8 w-36"
          />
          <select
            name="source"
            defaultValue={sp.source ?? "all"}
            className="h-8 rounded-lg border border-input bg-transparent px-2 text-sm"
          >
            <option value="all">Todas las fuentes</option>
            <option value="web">Web (cotización / contacto)</option>
            <option value="csv">CSV / outbound</option>
            <option value="manual">Manual</option>
          </select>
          <Input
            name="dia_lote"
            placeholder="Lote"
            defaultValue={sp.dia_lote ?? ""}
            className="h-8 w-20"
          />
          <Button type="submit" size="sm" variant="outline">
            Filtrar
          </Button>
        </form>

        <div className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Negocio</TableHead>
                <TableHead>Fuente</TableHead>
                <TableHead>Comuna</TableHead>
                <TableHead>WA</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Monto</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Lote</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((l) => (
                <TableRow key={l.id}>
                  <TableCell>
                    <Link href={`/leads/${l.id}`} className="font-medium hover:underline">
                      {l.nombre_negocio}
                    </Link>
                    <div className="text-[11px] text-muted-foreground">{l.email || l.rubro}</div>
                  </TableCell>
                  <TableCell>
                    <SourceBadge source={l.source} />
                  </TableCell>
                  <TableCell className="text-muted-foreground">{l.comuna ?? "—"}</TableCell>
                  <TableCell className="font-mono text-xs">
                    {displayWa(l.telefono_wa)}
                  </TableCell>
                  <TableCell className="font-mono text-xs">{l.buy_score ?? "—"}</TableCell>
                  <TableCell className="text-xs">{l.plan_ofrecido ?? "—"}</TableCell>
                  <TableCell className="text-xs">{formatClp(l.monto_clp)}</TableCell>
                  <TableCell>
                    <StatusMenu id={l.id} status={l.status} />
                  </TableCell>
                  <TableCell className="font-mono text-xs">{l.dia_lote ?? "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {leads.length === 0 ? (
            <p className="px-4 py-8 text-sm text-muted-foreground">Sin resultados.</p>
          ) : null}
        </div>
      </div>
    );
  } catch (e) {
    return <SetupHint error={e instanceof Error ? e.message : "Error"} />;
  }
}
