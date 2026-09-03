"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const needs = [
  "Producto nuevo",
  "Plataforma interna",
  "Rediseño",
  "Squad embebido",
  "Aún no lo sé",
];

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-foam px-8 py-12 md:px-12 md:py-16">
        <p className="eyebrow">Recibido</p>
        <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] md:text-5xl">
          Gracias. Lo leemos con calma.
        </h2>
        <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-muted">
          Te escribimos dentro de un día hábil, hora Santiago. Si es urgente,
          un WhatsApp también llega.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6" noValidate>
      <Field label="Nombre" htmlFor="nombre">
        <input
          id="nombre"
          name="nombre"
          required
          autoComplete="name"
          className={fieldClass}
          placeholder="Camila Riquelme"
        />
      </Field>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Correo" htmlFor="correo">
          <input
            id="correo"
            name="correo"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="camila@empresa.cl"
          />
        </Field>
        <Field label="Empresa" htmlFor="empresa">
          <input
            id="empresa"
            name="empresa"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Nombre de la empresa"
          />
        </Field>
      </div>
      <Field label="Qué necesitas" htmlFor="necesidad">
        <select id="necesidad" name="necesidad" required className={fieldClass} defaultValue="">
          <option value="" disabled>
            Elige una opción
          </option>
          {needs.map((need) => (
            <option key={need} value={need}>
              {need}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Cuéntanos" htmlFor="mensaje">
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          className={cn(fieldClass, "h-auto min-h-32 resize-y py-3")}
          placeholder="Qué opera hoy, qué duele, para cuándo."
        />
      </Field>
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-7 text-sm tracking-[0.04em] text-foam transition-colors hover:bg-copper disabled:opacity-60"
        >
          {status === "sending" ? "Enviando…" : "Enviar"}
        </button>
        <p className="text-sm text-muted">Respuesta en un día hábil.</p>
      </div>
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
    <label htmlFor={htmlFor} className="grid gap-2">
      <span className="text-[0.78rem] tracking-[0.14em] uppercase text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

const fieldClass =
  "h-12 w-full border-0 border-b border-line bg-transparent px-0 text-[1.02rem] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-copper";
