"use client";

import { useState, type FormEvent } from "react";
import { budgets } from "@/lib/data";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [budget, setBudget] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-gold/40 bg-panel px-8 py-14">
        <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
          Recibido
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
          Te escribimos en 48 horas hábiles.
        </h2>
        <p className="mt-4 max-w-md text-stone">
          Si el encargo no es para nosotros, te lo decimos igual — y, si podemos,
          te sugerimos a quién ir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Nombre" name="nombre" autoComplete="name" required />
        <Field label="Empresa" name="empresa" autoComplete="organization" required />
        <Field
          label="Correo"
          name="correo"
          type="email"
          autoComplete="email"
          required
        />
        <Field
          label="Celular"
          name="celular"
          type="tel"
          autoComplete="tel"
          placeholder="+56 9"
        />
      </div>

      <label className="block">
        <span className="font-mono text-[11px] tracking-[0.22em] text-mute uppercase">
          Qué necesitas
        </span>
        <textarea
          name="mensaje"
          required
          rows={6}
          placeholder="El nudo, no el deck. Qué duele, para cuándo, con quién se opera."
          className="mt-3 w-full resize-y border-b border-line bg-transparent py-3 text-ivory outline-none placeholder:text-mute/70 focus:border-gold"
        />
      </label>

      <fieldset>
        <legend className="font-mono text-[11px] tracking-[0.22em] text-mute uppercase">
          Presupuesto (UF)
        </legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setBudget(b.id)}
              className={cn(
                "border px-4 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-300",
                budget === b.id
                  ? "border-gold bg-gold text-void"
                  : "border-line text-stone hover:border-gold hover:text-ivory",
              )}
            >
              {b.label}
            </button>
          ))}
        </div>
        <input type="hidden" name="presupuesto" value={budget} />
      </fieldset>

      <div className="flex flex-col items-start justify-between gap-6 pt-4 md:flex-row md:items-center">
        <p className="max-w-sm text-xs leading-relaxed text-mute">
          Al enviar, aceptas que te contactemos por correo o WhatsApp sobre este
          encargo. No hay newsletter ni secuencia de correos automáticos.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="border border-gold bg-gold px-8 py-3 font-mono text-[11px] tracking-[0.22em] text-void uppercase transition-colors duration-300 hover:bg-transparent hover:text-gold disabled:opacity-60"
        >
          {status === "sending" ? "Enviando…" : "Enviar el encargo"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] tracking-[0.22em] text-mute uppercase">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-line bg-transparent py-3 text-ivory outline-none placeholder:text-mute/70 focus:border-gold"
      />
    </label>
  );
}
