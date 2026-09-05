"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const needs = [
  "Sistema de operación",
  "Producto hacia afuera",
  "Integración y datos",
  "Compañía / evolución",
  "Todavía no lo sé",
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
        <p className="kicker">Bitácora</p>
        <h2 className="display mt-4 text-[clamp(2.1rem,4vw,3.4rem)]">
          Quedó anotado. Lo leemos con calma.
        </h2>
        <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-muted">
          Te escribimos dentro de un día hábil, hora Santiago. Si es urgente, un
          WhatsApp también llega.
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
          placeholder="Josefina Ruiz"
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
            placeholder="josefina@empresa.cl"
          />
        </Field>
        <Field label="Empresa / operación" htmlFor="empresa">
          <input
            id="empresa"
            name="empresa"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Nombre de la operación"
          />
        </Field>
      </div>
      <Field label="Qué hay que orientar" htmlFor="necesidad">
        <select
          id="necesidad"
          name="necesidad"
          required
          className={fieldClass}
          defaultValue=""
        >
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
      <Field label="Dónde se pierde el rumbo" htmlFor="mensaje">
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
          className="btn btn-ink disabled:opacity-60"
        >
          {status === "sending" ? "Anotando…" : "Enviar a la bitácora"}
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
      <span className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

const fieldClass =
  "h-12 w-full border-0 border-b border-line bg-transparent px-0 text-[1.02rem] text-ink outline-none transition-colors placeholder:text-muted/55 focus:border-norte";
