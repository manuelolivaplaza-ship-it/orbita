import Link from "next/link";
import { addNoteAction, markReplyAction, markSentAction, updateLeadAction } from "@/app/actions/leads";
import { StatusMenu } from "@/components/status-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SourceBadge } from "@/components/source-badge";
import { PLAN_LABEL, MOTIVO_LABEL } from "@/lib/constants";
import { formatClp, formatDate, formatDateTime } from "@/lib/format";
import { displayWa, waMeUrl } from "@/lib/phone";
import type { Lead, LeadEvent } from "@/lib/types";

function Field({
  label,
  name,
  defaultValue,
  type = "text",
}: {
  label: string;
  name: string;
  defaultValue?: string | number | null;
  type?: string;
}) {
  return (
    <label className="grid gap-1">
      <span className="text-[11px] text-muted-foreground">{label}</span>
      <Input
        name={name}
        type={type}
        defaultValue={defaultValue ?? ""}
        className="h-8"
      />
    </label>
  );
}

function EventLine({ ev }: { ev: LeadEvent }) {
  const p = ev.payload;
  let text: string = ev.type;
  if (ev.type === "sent") text = `Enviado · step ${p.followup_step ?? "—"}`;
  if (ev.type === "reply") text = `Respuesta${p.text ? `: ${p.text}` : ""}`;
  if (ev.type === "status_change") text = `${p.from} → ${p.to}`;
  if (ev.type === "note") {
    text =
      p.kind === "inbound"
        ? `Llegó del sitio (${String(p.source ?? "web")})`
        : String(p.text ?? "Nota");
  }
  return (
    <li className="flex gap-3 text-[12px]">
      <span className="w-32 shrink-0 font-mono text-muted-foreground">
        {formatDateTime(ev.created_at)}
      </span>
      <span className="rounded bg-muted px-1.5 font-mono text-[10px] uppercase text-muted-foreground">
        {ev.type}
      </span>
      <span className="min-w-0 flex-1 text-foreground/90">{text}</span>
    </li>
  );
}

export function LeadFicha({ lead, events }: { lead: Lead; events: LeadEvent[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-heading text-xl font-medium">{lead.nombre_negocio}</h1>
              <StatusMenu id={lead.id} status={lead.status} />
              <SourceBadge source={lead.source} />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {lead.email ?? "sin email"} · {lead.comuna ?? "—"} · {lead.rubro ?? "—"} ·{" "}
              {displayWa(lead.telefono_wa)}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {lead.telefono_wa ? (
              <Button asChild>
                <a href={waMeUrl(lead.telefono_wa, lead.mensaje_wa)} target="_blank" rel="noreferrer">
                  Abrir WhatsApp
                </a>
              </Button>
            ) : null}
            <form action={markSentAction.bind(null, lead.id)}>
              <Button type="submit" variant="outline">
                Marcar enviado
              </Button>
            </form>
            <form action={markReplyAction.bind(null, lead.id)}>
              <Button type="submit" variant="outline">
                Marcar respuesta
              </Button>
            </form>
          </div>
        </div>

        <form action={updateLeadAction.bind(null, lead.id)} className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Field label="Negocio" name="nombre_negocio" defaultValue={lead.nombre_negocio} />
            <Field label="Rubro" name="rubro" defaultValue={lead.rubro} />
            <Field label="Comuna" name="comuna" defaultValue={lead.comuna} />
            <Field label="Email" name="email" defaultValue={lead.email} type="email" />
            <Field label="WhatsApp (569…)" name="telefono_wa" defaultValue={lead.telefono_wa} />
            <Field label="Website" name="website" defaultValue={lead.website} />
            <Field label="Maps" name="maps_url" defaultValue={lead.maps_url} />
            <Field label="Clase" name="clase" defaultValue={lead.clase} />
            <Field label="Buy score" name="buy_score" defaultValue={lead.buy_score} type="number" />
            <Field label="Slug" name="slug" defaultValue={lead.slug} />
            <Field label="Ejemplo URL" name="ejemplo_url" defaultValue={lead.ejemplo_url} />
            <Field label="Galería URL" name="galeria_url" defaultValue={lead.galeria_url} />
            <Field label="Día lote" name="dia_lote" defaultValue={lead.dia_lote} type="number" />
            <label className="grid gap-1">
              <span className="text-[11px] text-muted-foreground">Plan</span>
              <select
                name="plan_ofrecido"
                defaultValue={lead.plan_ofrecido ?? ""}
                className="h-8 rounded-lg border border-input bg-transparent px-2 text-sm"
              >
                <option value="">—</option>
                <option value="sonda">Sonda · $420k</option>
                <option value="estacion">Estación · $990k</option>
                <option value="constelacion">Constelación · $1.49M</option>
              </select>
            </label>
            <Field label="Monto CLP" name="monto_clp" defaultValue={lead.monto_clp} type="number" />
            <Field label="Next follow-up" name="next_followup" defaultValue={lead.next_followup} type="date" />
            <Field label="Reunión" name="reunion_at" defaultValue={lead.reunion_at?.slice(0, 16)} type="datetime-local" />
            <Field label="Owner" name="owner" defaultValue={lead.owner} />
          </div>
          <label className="grid gap-1">
            <span className="text-[11px] text-muted-foreground">Insight</span>
            <Textarea name="insight" defaultValue={lead.insight ?? ""} rows={3} />
          </label>
          <label className="grid gap-1">
            <span className="text-[11px] text-muted-foreground">Mensaje WA</span>
            <Textarea name="mensaje_wa" defaultValue={lead.mensaje_wa ?? ""} rows={4} />
          </label>
          <label className="grid gap-1">
            <span className="text-[11px] text-muted-foreground">Notas</span>
            <Textarea name="notas" defaultValue={lead.notas ?? ""} rows={3} />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="sena" defaultChecked={lead.sena} />
            Seña pagada
          </label>
          <Button type="submit">Guardar ficha</Button>
        </form>
      </div>

      <aside className="space-y-4">
        <div className="rounded-xl p-4 ring-1 ring-foreground/10">
          <h2 className="mb-3 text-sm font-medium">Resumen</h2>
          <dl className="grid grid-cols-2 gap-y-2 text-[12px]">
            <dt className="text-muted-foreground">Plan</dt>
            <dd>{lead.plan_ofrecido ? PLAN_LABEL[lead.plan_ofrecido] : "—"}</dd>
            <dt className="text-muted-foreground">Monto</dt>
            <dd>{formatClp(lead.monto_clp)}</dd>
            <dt className="text-muted-foreground">Envío</dt>
            <dd>{formatDateTime(lead.fecha_envio)}</dd>
            <dt className="text-muted-foreground">Respuesta</dt>
            <dd>{formatDateTime(lead.fecha_respuesta)}</dd>
            <dt className="text-muted-foreground">Follow-up</dt>
            <dd>
              {formatDate(lead.next_followup)} · d{lead.followup_step}
            </dd>
            <dt className="text-muted-foreground">Seña</dt>
            <dd>{lead.sena ? "sí" : "no"}</dd>
            <dt className="text-muted-foreground">Motivo</dt>
            <dd>{lead.motivo_perdido ? MOTIVO_LABEL[lead.motivo_perdido] : "—"}</dd>
            <dt className="text-muted-foreground">Fuente</dt>
            <dd>{lead.source ?? "—"}</dd>
            <dt className="text-muted-foreground">Email</dt>
            <dd className="truncate">{lead.email ?? "—"}</dd>
          </dl>
          {lead.maps_url ? (
            <a
              href={lead.maps_url}
              className="mt-3 inline-block text-xs text-muted-foreground underline"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
          ) : null}
        </div>

        <div className="rounded-xl p-4 ring-1 ring-foreground/10">
          <h2 className="mb-3 text-sm font-medium">Nota</h2>
          <form action={addNoteAction.bind(null, lead.id)} className="space-y-2">
            <Label htmlFor="note" className="sr-only">
              Nota
            </Label>
            <Textarea id="note" name="text" rows={3} placeholder="Qué pasó…" required />
            <Button type="submit" size="sm" variant="outline">
              Agregar
            </Button>
          </form>
        </div>

        <div className="rounded-xl p-4 ring-1 ring-foreground/10">
          <h2 className="mb-3 text-sm font-medium">Timeline</h2>
          {events.length === 0 ? (
            <p className="text-xs text-muted-foreground">Sin eventos.</p>
          ) : (
            <ul className="space-y-2">
              {events.map((ev) => (
                <EventLine key={ev.id} ev={ev} />
              ))}
            </ul>
          )}
        </div>

        <Link href="/leads" className="text-xs text-muted-foreground underline">
          ← Todos los leads
        </Link>
      </aside>
    </div>
  );
}
