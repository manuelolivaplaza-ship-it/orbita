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
  "Primera evaluación",
  ...treatments.filter((t) => t.slug !== "evaluacion").map((t) => t.name),
  "Urgencia — mejor llama",
];

const previsiones = ["Fonasa", "Isapre", "Particular", "Aún no lo sé"];

const fieldClass =
  "h-11 rounded-none border-line bg-background text-base md:text-sm";

export function BookingForm({ inverted = false }: { inverted?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [reason, setReason] = useState("");
  const [prevision, setPrevision] = useState("");

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
      const res = await fetch("/api/agenda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          reason,
          prevision,
          date: data.get("date"),
          notes: data.get("notes"),
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
      setReason("");
      setPrevision("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div
        className={
          inverted
            ? "border border-carbon/15 bg-hueso p-8 text-carbon sm:p-10"
            : "border border-line bg-surface p-8 sm:p-10"
        }
      >
        <p className="kicker">Recibido</p>
        <h3 className="mt-3 font-display text-3xl tracking-tight">
          Te confirmamos la hora en el día.
        </h3>
        <p className="mt-4 max-w-md leading-relaxed opacity-80">
          Recepción escribe por teléfono o WhatsApp. Si duele ahora, llama: +56
          9 8123 4567.
        </p>
        <Button
          className="mt-8 h-11 rounded-none px-6"
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
      className={
        inverted
          ? "border border-carbon/15 bg-hueso p-6 text-carbon sm:p-10"
          : "border border-line bg-surface p-6 sm:p-10"
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" htmlFor="name">
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </Field>
        <Field label="Teléfono" htmlFor="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+56 9"
            className={fieldClass}
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </Field>
        <div className="grid gap-2">
          <Label htmlFor="prevision">Previsión</Label>
          <Select value={prevision} onValueChange={setPrevision}>
            <SelectTrigger id="prevision" className={`${fieldClass} w-full`}>
              <SelectValue placeholder="Elige" />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              {previsiones.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="reason">Motivo</Label>
          <Select value={reason} onValueChange={setReason}>
            <SelectTrigger id="reason" className={`${fieldClass} w-full`}>
              <SelectValue placeholder="Qué te trae" />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              {reasons.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Field label="Día preferido" htmlFor="date">
          <Input id="date" name="date" type="date" className={fieldClass} />
        </Field>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="notes">Notas</Label>
          <Textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Dolor, ansiedad, un tratamiento previo…"
            className="rounded-none border-line bg-background"
          />
        </div>
      </div>
      <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed">
        <input
          type="checkbox"
          name="privacy"
          required
          className="mt-1 size-4 rounded-none accent-[#c8a88a]"
        />
        <span>
          Autorizo el tratamiento de mis datos para agendar la evaluación,
          según la Ley 19.628.
        </span>
      </label>
      {status === "error" ? (
        <p className="mt-4 text-sm text-destructive">
          Completa nombre, teléfono, motivo y el consentimiento.
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 h-12 w-full rounded-none px-6 text-[0.72rem] tracking-[0.16em] uppercase sm:w-auto"
      >
        {status === "sending" ? "Enviando…" : "Pedir hora"}
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
