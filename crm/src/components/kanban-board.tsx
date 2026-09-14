"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { changeStatusAction } from "@/app/actions/leads";
import { formatClp } from "@/lib/format";
import { PIPELINE_STATUSES, SIDE_STATUSES, isInboundSource } from "@/lib/types";
import type { Lead, LeadStatus, MotivoPerdido } from "@/lib/types";
import { MOTIVO_LABEL, STATUS_LABEL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MOTIVOS_PERDIDO } from "@/lib/types";
import { SourceBadge } from "@/components/source-badge";

function Card({ lead }: { lead: Lead }) {
  return (
    <Link
      href={`/leads/${lead.id}`}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/lead-id", lead.id);
        e.dataTransfer.effectAllowed = "move";
      }}
      className="block rounded-lg bg-card p-2.5 ring-1 ring-foreground/10 hover:ring-foreground/20"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-[13px] font-medium leading-tight">{lead.nombre_negocio}</p>
        {lead.buy_score != null ? (
          <span className="font-mono text-[10px] text-muted-foreground">
            {lead.buy_score}
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-[11px] text-muted-foreground">
        {lead.comuna ?? lead.email ?? "—"} · {formatClp(lead.monto_clp)}
      </p>
      {isInboundSource(lead.source) ? (
        <div className="mt-1.5">
          <SourceBadge source={lead.source} />
        </div>
      ) : null}
    </Link>
  );
}

function Column({
  status,
  leads,
  onDrop,
}: {
  status: LeadStatus;
  leads: Lead[];
  onDrop: (id: string, status: LeadStatus) => void;
}) {
  return (
    <div
      className="flex w-[220px] shrink-0 flex-col rounded-xl bg-muted/30 ring-1 ring-foreground/8"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/lead-id");
        if (id) onDrop(id, status);
      }}
    >
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-[12px] font-medium">{STATUS_LABEL[status]}</span>
        <span className="font-mono text-[11px] text-muted-foreground">
          {leads.length}
        </span>
      </div>
      <div className="flex flex-col gap-2 px-2 pb-3">
        {leads.map((l) => (
          <Card key={l.id} lead={l} />
        ))}
      </div>
    </div>
  );
}

export function KanbanBoard({ leads }: { leads: Lead[] }) {
  const router = useRouter();
  const [, start] = useTransition();
  const [perdido, setPerdido] = useState<{ id: string } | null>(null);
  const [ganado, setGanado] = useState<{ id: string } | null>(null);
  const [motivo, setMotivo] = useState<MotivoPerdido>("sin_respuesta");

  function onDrop(id: string, status: LeadStatus) {
    if (status === "perdido") {
      setPerdido({ id });
      return;
    }
    if (status === "ganado") {
      setGanado({ id });
      return;
    }
    start(async () => {
      try {
        await changeStatusAction(id, status);
        router.refresh();
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Error");
      }
    });
  }

  const grouped = (status: LeadStatus) => leads.filter((l) => l.status === status);

  return (
    <>
      <div className="flex gap-3 overflow-x-auto pb-4">
        {PIPELINE_STATUSES.map((s) => (
          <Column key={s} status={s} leads={grouped(s)} onDrop={onDrop} />
        ))}
        {SIDE_STATUSES.map((s) => (
          <Column key={s} status={s} leads={grouped(s)} onDrop={onDrop} />
        ))}
      </div>

      <Dialog open={!!perdido} onOpenChange={() => setPerdido(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Motivo de perdido</DialogTitle>
          </DialogHeader>
          <Select value={motivo} onValueChange={(v) => setMotivo(v as MotivoPerdido)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {MOTIVOS_PERDIDO.map((m) => (
                <SelectItem key={m} value={m}>
                  {MOTIVO_LABEL[m]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <DialogFooter>
            <Button variant="outline" onClick={() => setPerdido(null)}>
              Cancelar
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                if (!perdido) return;
                start(async () => {
                  await changeStatusAction(perdido.id, "perdido", { motivo });
                  setPerdido(null);
                  router.refresh();
                });
              }}
            >
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!ganado} onOpenChange={() => setGanado(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>¿Seña pagada?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">Ganado solo con seña.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setGanado(null)}>
              Cancelar
            </Button>
            <Button
              onClick={() => {
                if (!ganado) return;
                start(async () => {
                  try {
                    await changeStatusAction(ganado.id, "ganado", { sena: true });
                    setGanado(null);
                    router.refresh();
                  } catch (e) {
                    toast.error(e instanceof Error ? e.message : "Error");
                  }
                });
              }}
            >
              Seña recibida
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
