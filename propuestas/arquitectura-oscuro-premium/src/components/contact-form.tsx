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
    const data = new FormData(event.currentTarget);
    const payload = Object.fromEntries(data.entries());
    try {
      window.localStorage.setItem(
        "orilla-encargo",
        JSON.stringify({ ...payload, at: new Date().toISOString() }),
      );
    } catch {
      /* ignore */
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-surface px-8 py-14">
        <p className="kicker">Recibido</p>
        <h3 className="mt-4 font-display text-4xl italic leading-tight">
          Gracias. Leemos cada encargo con calma.
        </h3>
        <p className="mt-4 max-w-md text-sm leading-7 text-muted">
          Si el proyecto calza, respondemos en unos días para coordinar una
          primera conversación en Lastarria o una visita al predio.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="field">
          <span>Nombre</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label className="field">
          <span>Correo</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label className="field">
          <span>Teléfono</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="field">
          <span>Comuna / predio</span>
          <input name="predio" type="text" />
        </label>
        <label className="field">
          <span>Tipo de encargo</span>
          <select name="type" defaultValue="Casa">
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Superficie aprox.</span>
          <input name="area" type="text" placeholder="m²" />
        </label>
      </div>
      <label className="field">
        <span>Cuéntanos el predio y lo que imaginas</span>
        <textarea name="message" required rows={6} />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-muted">
          Honorarios en UF, por escrito. Primera conversación en el estudio,
          sin cargo. Si el encargo no es para nosotros, también lo decimos.
        </p>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </div>
    </form>
  );
}
