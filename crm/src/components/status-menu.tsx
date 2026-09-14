"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { changeStatusAction } from "@/app/actions/leads";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatusBadge } from "@/components/status-badge";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MOTIVO_LABEL, STATUS_LABEL } from "@/lib/constants";
import { ALL_STATUSES, MOTIVOS_PERDIDO } from "@/lib/types";
import type { LeadStatus, MotivoPerdido } from "@/lib/types";
import { toast } from "sonner";

export function StatusMenu({
  id,
  status,
}: {
  id: string;
  status: LeadStatus;
}) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [perdidoOpen, setPerdidoOpen] = useState(false);
  const [ganadoOpen, setGanadoOpen] = useState(false);
  const [motivo, setMotivo] = useState<MotivoPerdido>("sin_respuesta");

  function go(next: LeadStatus) {
    if (next === "perdido") {
      setPerdidoOpen(true);
      return;
    }
    if (next === "ganado") {
      setGanadoOpen(true);
      return;
    }
    start(async () => {
      try {
        await changeStatusAction(id, next);
        toast.success(`Estado → ${STATUS_LABEL[next]}`);
        router.refresh();
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Error");
      }
    });
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" disabled={pending}>
            <StatusBadge status={status} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Mover a</DropdownMenuLabel>
          {ALL_STATUSES.map((s) => (
            <DropdownMenuItem key={s} onSelect={() => go(s)}>
              {STATUS_LABEL[s]}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={perdidoOpen} onOpenChange={setPerdidoOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Marcar perdido</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <Label>Motivo</Label>
            <Select
              value={motivo}
              onValueChange={(v) => setMotivo(v as MotivoPerdido)}
            >
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
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setPerdidoOpen(false)}>
              Cancelar
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                start(async () => {
                  try {
                    await changeStatusAction(id, "perdido", { motivo });
                    setPerdidoOpen(false);
                    toast.success("Perdido");
                    router.refresh();
                  } catch (e) {
                    toast.error(e instanceof Error ? e.message : "Error");
                  }
                })
              }
            >
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={ganadoOpen} onOpenChange={setGanadoOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ganado — seña pagada</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Ganado solo con seña. Confirma que el abono llegó.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setGanadoOpen(false)}>
              Cancelar
            </Button>
            <Button
              onClick={() =>
                start(async () => {
                  try {
                    await changeStatusAction(id, "ganado", { sena: true });
                    setGanadoOpen(false);
                    toast.success("Ganado");
                    router.refresh();
                  } catch (e) {
                    toast.error(e instanceof Error ? e.message : "Error");
                  }
                })
              }
            >
              Seña recibida
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
