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
import { treatments } from "@/lib/site";

const reasons = [
  "Primera visita / revisión",
  ...treatments.map((t) => t.name),
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
      const res = await fetch("/api/cita", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          reason: reason || data.get("reason"),
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
      <div className="rounded-[1.6rem] border border-border bg-card p-8 sm:p-10">
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-sage">
          Recibido
        </p>
        <h3 className="mt-3 font-display text-3xl tracking-tight">
          Te escribimos en el día.
        </h3>
        <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
          Recepción confirma hueco por teléfono o WhatsApp. Si duele ahora,
          llama: 910 32 00 32.
        </p>
        <Button
          className="mt-8 h-11 rounded-full px-6"
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
      className="rounded-[1.6rem] border border-border bg-card p-6 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" htmlFor="name">
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="h-11 rounded-xl bg-background"
          />
        </Field>
        <Field label="Teléfono" htmlFor="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="h-11 rounded-xl bg-background"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-11 rounded-xl bg-background"
          />
        </Field>
        <div className="grid gap-2">
          <Label htmlFor="reason">Motivo</Label>
          <input type="hidden" name="reason" value={reason} required />
          <Select value={reason || undefined} onValueChange={setReason}>
            <SelectTrigger
              id="reason"
              size="default"
              className="h-11 w-full rounded-xl bg-background"
            >
              <SelectValue placeholder="Elige una opción" />
            </SelectTrigger>
            <SelectContent position="popper" className="bg-card">
              {reasons.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Field label="Preferencia de día" htmlFor="date">
          <Input
            id="date"
            name="date"
            type="date"
            className="h-11 rounded-xl bg-background"
          />
        </Field>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="notes">Notas (opcional)</Label>
          <Textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Si hay miedo, dolor, o llevas tiempo sin ir, dínoslo aquí. Adapta la cita."
            className="min-h-28 rounded-xl bg-background"
          />
        </div>
      </div>
      <label className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="privacy"
          required
          className="mt-1 size-4 rounded border-input"
        />
        He leído y acepto la{" "}
        <a href="/privacidad" className="underline underline-offset-4">
          política de privacidad
        </a>
        .
      </label>
      {status === "error" ? (
        <p className="mt-4 text-sm text-destructive">
          No hemos podido enviar. Prueba de nuevo o llama al 910 32 00 32.
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 h-12 w-full rounded-full sm:w-auto sm:px-8"
      >
        {status === "sending" ? "Enviando…" : "Pedir cita"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
