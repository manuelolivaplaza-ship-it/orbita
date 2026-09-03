"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

const interests = [
  { value: "visita", label: "Solo quiero conocer el club" },
  { value: "alba", label: "Plan Alba" },
  { value: "luz", label: "Plan Alba Luz" },
  { value: "atelier", label: "Plan Atelier" },
  { value: "clases", label: "Clases sueltas / pase del día" },
];

const hours = [
  { value: "manana", label: "Mañana (7:00 – 10:00)" },
  { value: "mediodia", label: "Mediodía (12:00 – 15:00)" },
  { value: "tarde", label: "Tarde (17:00 – 20:00)" },
];

const field =
  "w-full border border-ink/15 bg-cream px-4 py-3.5 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink-soft/70 focus:border-copper";

export function VisitForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");

    try {
      const res = await fetch("/api/visita", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-copper/30 bg-cream px-8 py-12">
        <p className="kicker">Listo</p>
        <h3 className="mt-4 font-display text-3xl tracking-tight">
          Recibimos tu visita.
        </h3>
        <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
          Te escribimos dentro del día, en horario de club, para confirmar el
          bloque. Si tienes prisa, mándanos un WhatsApp.
        </p>
        <a
          href="https://wa.me/56942187703"
          className="mt-8 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.2em] text-copper"
        >
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <label className="grid gap-2 text-sm">
        Nombre
        <input
          required
          name="nombre"
          autoComplete="name"
          className={field}
          placeholder="Camila Rojas"
        />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Correo
          <input
            required
            type="email"
            name="correo"
            autoComplete="email"
            className={field}
            placeholder="camila@correo.cl"
          />
        </label>
        <label className="grid gap-2 text-sm">
          Teléfono
          <input
            required
            type="tel"
            name="telefono"
            autoComplete="tel"
            className={field}
            placeholder="+56 9 1234 5678"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        Qué te interesa
        <select name="interes" className={cn(field, "appearance-none")} defaultValue="visita">
          {interests.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <fieldset className="grid gap-3">
        <legend className="text-sm">Horario preferido</legend>
        <div className="grid gap-2">
          {hours.map((item) => (
            <label
              key={item.value}
              className="flex cursor-pointer items-center gap-3 border border-ink/10 bg-cream px-4 py-3 text-sm"
            >
              <input
                type="radio"
                name="horario"
                value={item.value}
                defaultChecked={item.value === "manana"}
                className="accent-copper"
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-2 text-sm">
        Algo que debamos saber
        <textarea
          name="mensaje"
          rows={4}
          className={field}
          placeholder="Lesiones, horarios difíciles, si vienes con alguien…"
        />
      </label>
      {status === "error" ? (
        <p className="text-sm text-copper">
          No pudimos enviar. Prueba de nuevo o escríbenos por WhatsApp.
        </p>
      ) : null}
      <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
        {status === "sending" ? "Enviando…" : "Pedir visita"}
      </Button>
    </form>
  );
}
