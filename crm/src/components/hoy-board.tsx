"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { ExternalLink, MessageCircle, SkipForward } from "lucide-react";
import { toast } from "sonner";
import { markSentAction, snoozeAction } from "@/app/actions/leads";
import { SourceBadge } from "@/components/source-badge";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { formatRelativeDay } from "@/lib/format";
import { displayWa, waMeUrl } from "@/lib/phone";
import type { Lead } from "@/lib/types";

function Row({
  lead,
  today,
  kind,
}: {
  lead: Lead;
  today: string;
  kind: "followup" | "nuevo" | "inbound";
}) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const overdue = kind === "followup" && lead.next_followup && lead.next_followup < today;

  return (
    <div className="grid grid-cols-[1fr_110px_88px_72px_auto] items-center gap-3 border-b border-border/60 px-3 py-2.5 text-[13px] last:border-0">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <Link href={`/leads/${lead.id}`} className="truncate font-medium hover:underline">
            {lead.nombre_negocio}
          </Link>
          <StatusBadge status={lead.status} />
          {kind === "inbound" ? <SourceBadge source={lead.source} /> : null}
        </div>
        <p className="truncate text-xs text-muted-foreground">
          {kind === "inbound"
            ? [lead.email, displayWa(lead.telefono_wa)].filter((x) => x && x !== "—").join(" · ") || "—"
            : `${lead.comuna ?? "—"} · ${displayWa(lead.telefono_wa)}${lead.buy_score != null ? ` · score ${lead.buy_score}` : ""}`}
        </p>
      </div>
      <div className="font-mono text-xs text-muted-foreground">
        {kind === "followup"
          ? formatRelativeDay(lead.next_followup, today)
          : kind === "inbound"
            ? lead.source ?? "web"
            : `lote ${lead.dia_lote ?? "—"}`}
        {overdue ? (
          <span className="ml-1 text-rose-300">vencido</span>
        ) : null}
      </div>
      <div className="text-xs text-muted-foreground">
        {lead.plan_ofrecido ?? "—"}
      </div>
      <div className="font-mono text-xs text-muted-foreground">
        d{lead.followup_step}
      </div>
      <div className="flex items-center justify-end gap-1">
        {lead.telefono_wa ? (
          <Button size="sm" variant="outline" asChild>
            <a
              href={waMeUrl(lead.telefono_wa, lead.mensaje_wa)}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="size-3.5" />
              WA
            </a>
          </Button>
        ) : null}
        <Button
          size="sm"
          disabled={pending || (kind !== "inbound" && !lead.telefono_wa)}
          onClick={() =>
            start(async () => {
              try {
                await markSentAction(lead.id);
                toast.success("Marcado enviado");
                router.refresh();
              } catch (e) {
                toast.error(e instanceof Error ? e.message : "Error");
              }
            })
          }
        >
          Enviado
        </Button>
        {kind === "followup" ? (
          <Button
            size="icon-sm"
            variant="ghost"
            disabled={pending}
            title="Posponer 1 día"
            onClick={() =>
              start(async () => {
                await snoozeAction(lead.id);
                router.refresh();
              })
            }
          >
            <SkipForward className="size-3.5" />
          </Button>
        ) : null}
        {lead.ejemplo_url ? (
          <Button size="icon-sm" variant="ghost" asChild>
            <a href={lead.ejemplo_url} target="_blank" rel="noreferrer">
              <ExternalLink className="size-3.5" />
            </a>
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export function HoyBoard({
  followups,
  nuevos,
  inbound,
  today,
  cap,
}: {
  followups: Lead[];
  nuevos: Lead[];
  inbound: Lead[];
  today: string;
  cap: number;
}) {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-xl ring-1 ring-emerald-500/20">
        <header className="flex items-center justify-between border-b border-border/80 bg-card px-4 py-2.5">
          <div>
            <h2 className="text-sm font-medium">Entrantes web</h2>
            <p className="text-xs text-muted-foreground">
              Cotizaciones, contacto y reuniones del sitio · llegan acá, no a WhatsApp
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {inbound.length}
          </span>
        </header>
        {inbound.length === 0 ? (
          <p className="px-4 py-8 text-sm text-muted-foreground">
            Nadie cotizó todavía.
          </p>
        ) : (
          inbound.map((lead) => (
            <Row key={lead.id} lead={lead} today={today} kind="inbound" />
          ))
        )}
      </section>

      <section className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
        <header className="flex items-center justify-between border-b border-border/80 bg-card px-4 py-2.5">
          <div>
            <h2 className="text-sm font-medium">Follow-ups vencidos</h2>
            <p className="text-xs text-muted-foreground">
              Primero los más atrasados · cadencia 2 / 5 / 9 / 14
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {followups.length}
          </span>
        </header>
        {followups.length === 0 ? (
          <p className="px-4 py-8 text-sm text-muted-foreground">
            Nada vencido. Bien.
          </p>
        ) : (
          followups.map((lead) => (
            <Row key={lead.id} lead={lead} today={today} kind="followup" />
          ))
        )}
      </section>

      <section className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
        <header className="flex items-center justify-between border-b border-border/80 bg-card px-4 py-2.5">
          <div>
            <h2 className="text-sm font-medium">Nuevos</h2>
            <p className="text-xs text-muted-foreground">
              Cap {cap} · ordenados por buy_score
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {nuevos.length}/{cap}
          </span>
        </header>
        {nuevos.length === 0 ? (
          <p className="px-4 py-8 text-sm text-muted-foreground">
            No hay nuevos en cola.
          </p>
        ) : (
          nuevos.map((lead) => (
            <Row key={lead.id} lead={lead} today={today} kind="nuevo" />
          ))
        )}
      </section>
    </div>
  );
}
