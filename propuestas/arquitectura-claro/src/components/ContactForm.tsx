"use client";

import { useState, type FormEvent } from "react";

const types = [
  "Casa",
  "Hospitalidad",
  "Cultural",
  "Productivo",
  "Público",
  "Otro",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-paper-2 px-8 py-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Recibido
        </p>
        <h3 className="mt-4 font-display text-4xl italic leading-tight">
          Gracias. Leemos cada encargo con calma.
        </h3>
        <p className="mt-4 max-w-md text-sm leading-7 text-muted">
          Si el proyecto encaja, respondemos en unos días para coordinar una
          primera conversación en el estudio o en el predio.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Nombre" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Teléfono" name="phone" />
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
            Tipo de encargo
          </span>
          <select
            name="type"
            className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm"
            defaultValue="Casa"
          >
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
          Contanos el lugar y lo que imaginás
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 text-sm leading-7"
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-muted">
          No enviamos propuestas automáticas. Si el encargo no es para
          nosotros, también lo decimos.
        </p>
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center bg-ink px-8 text-[11px] uppercase tracking-[0.22em] text-paper transition hover:bg-accent"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm"
      />
    </label>
  );
}
