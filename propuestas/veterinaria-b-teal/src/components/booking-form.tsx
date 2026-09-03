"use client";

import { useState } from "react";
import Link from "next/link";
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
import { services, site } from "@/lib/site";

const reasons = [
  "Primera hora / control",
  ...services.map((s) => s.name),
  "Otra consulta",
];

const species = ["Perro", "Gato", "Conejo", "Ave", "Hurón", "Reptil", "Otra"];

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [reason, setReason] = useState("");
  const [specie, setSpecie] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("privacy") || !reason || !specie) {
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
          pet: data.get("pet"),
          species: specie,
          reason,
          date: data.get("date"),
          notes: data.get("notes"),
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
      setReason("");
      setSpecie("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-[1.6rem] border border-border bg-card p-8 sm:p-10">
        <p className="kicker">Recibido</p>
        <h3 className="mt-3 font-display text-3xl tracking-tight">
          Te confirmamos en el día.
        </h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          Recepción escribe por teléfono o WhatsApp con el hueco. Si duele
          ahora, no esperes este formulario: llama al {site.phoneIntl}.
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
      className="rounded-[1.6rem] border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Tu nombre" htmlFor="name">
          <Input id="name" name="name" required autoComplete="name" />
        </Field>
        <Field label="Teléfono" htmlFor="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+56 9 …"
          />
        </Field>
        <Field label="Correo" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="opcional"
          />
        </Field>
        <Field label="Nombre del animal" htmlFor="pet">
          <Input id="pet" name="pet" required placeholder="Copihue, Menta…" />
        </Field>
        <div className="grid gap-2">
          <Label>Especie</Label>
          <Select value={specie} onValueChange={setSpecie}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Elige" />
            </SelectTrigger>
            <SelectContent>
              {species.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label>Motivo</Label>
          <Select value={reason} onValueChange={setReason}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Elige" />
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
        <Field label="Fecha preferida" htmlFor="date">
          <Input id="date" name="date" type="date" />
        </Field>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="notes">Algo que debamos saber</Label>
          <Textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Vacunas al día, miedo al transportín, un cojeo de ayer…"
          />
        </div>
      </div>
      <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="privacy"
          className="mt-1 size-4 accent-[var(--river)]"
        />
        <span>
          Acepto el tratamiento de mis datos según la{" "}
          <Link href="/privacidad" className="text-moss underline-offset-2 hover:underline">
            política de privacidad
          </Link>
          .
        </span>
      </label>
      {status === "error" ? (
        <p className="mt-4 text-sm text-destructive">
          Falta un dato, o la red falló. Si es urgente, llama: {site.phone}.
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 h-12 w-full rounded-full sm:w-auto sm:px-8"
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
