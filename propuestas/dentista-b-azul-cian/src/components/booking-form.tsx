"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { site, treatments } from "@/lib/site";

const reasons = [
  "Primera visita / diagnóstico 3D",
  ...treatments.map((t) => t.name),
  "Urgencia con dolor",
  "Otra consulta",
];

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [reason, setReason] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("privacy") || !reason) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/hora", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          reason,
          date: data.get("date"),
          notes: data.get("notes"),
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
      setReason("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-[1.4rem] border border-border bg-card p-8 sm:p-10">
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-tide">
          Recibido
        </p>
        <h3 className="mt-3 font-display text-3xl tracking-tight">
          Te escribimos en el día.
        </h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          Recepción confirma el hueco por teléfono o WhatsApp. Si duele ahora,
          llama al {site.phone} o escribe al {site.mobile}.
        </p>
        <Button
          className="mt-8 h-11 rounded-xl px-6"
          onClick={() => setStatus("idle")}
          variant="outline"
        >
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.4rem] border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono / WhatsApp</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            placeholder="9 1234 5678"
            autoComplete="tel"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="opcional"
          />
        </div>
        <div className="space-y-2">
          <Label>Motivo</Label>
          <Select value={reason} onValueChange={setReason}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Elige un motivo" />
            </SelectTrigger>
            <SelectContent>
              {reasons.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="date">Preferencia de día</Label>
          <Input id="date" name="date" type="date" />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="notes">Notas</Label>
          <Textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Dolor, años sin ir, isapre, horario que te acomoda…"
          />
        </div>
      </div>
      <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="privacy"
          className="mt-1 size-4 accent-[var(--primary)]"
        />
        <span>
          Acepto que Cian me contacte para agendar y que mis datos se traten
          según la{" "}
          <a href="/privacidad" className="underline underline-offset-2">
            política de privacidad
          </a>
          .
        </span>
      </label>
      {status === "error" ? (
        <p className="mt-4 text-sm text-destructive">
          Falta el motivo, el consentimiento, o no pudimos enviar. Intenta de
          nuevo o escríbenos por WhatsApp.
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 h-12 w-full rounded-xl sm:w-auto sm:px-8"
      >
        {status === "sending" ? "Enviando…" : "Pedir hora"}
      </Button>
    </form>
  );
}
