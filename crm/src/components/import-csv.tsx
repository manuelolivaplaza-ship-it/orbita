"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { importCsvAction } from "@/app/actions/import";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function ImportCsv() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pending, start] = useTransition();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Importar CSV
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Importar CSV</DialogTitle>
          <DialogDescription>
            Upsert por <span className="font-mono">id</span>. Acepta{" "}
            <span className="font-mono">CONTROL_PIPELINE</span>,{" "}
            <span className="font-mono">por_dia</span>, <span className="font-mono">estado</span>{" "}
            y acentos (Respondió → respondio).
          </DialogDescription>
        </DialogHeader>
        <form
          action={(fd) =>
            start(async () => {
              try {
                const res = await importCsvAction(fd);
                toast.success(`${res.upserted} filas upsert`);
                if (res.skipped.length) {
                  toast.message(`${res.skipped.length} filas saltadas`);
                }
                if (res.errors.length) toast.error(res.errors[0]);
                setOpen(false);
                router.refresh();
              } catch (e) {
                toast.error(e instanceof Error ? e.message : "Error");
              }
            })
          }
          className="space-y-3"
        >
          <Input type="file" name="file" accept=".csv,text/csv" required />
          <DialogFooter>
            <Button type="submit" disabled={pending}>
              {pending ? "Importando…" : "Upsert"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
