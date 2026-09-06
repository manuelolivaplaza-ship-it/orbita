"use client";

import { useState, type FormEvent } from "react";
import { studio } from "@/lib/studio";

const types = ["Casa nueva", "Ampliación", "Taller / pabellón", "Otro"];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = Object.fromEntries(data.entries());
    try {
      window.localStorage.setItem(
        "umbral-encargo",
        JSON.stringify({ ...payload, at: new Date().toISOString() }),
      );
    } catch {
      /* ignore */
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-surface px-6 py-12 sm:px-8 sm:py-14">
        <p className="kicker">Recibido</p>
        <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
          Gracias. Leemos cada encargo con calma.
        </h3>
        <p className="mt-4 max-w-md text-sm leading-7 text-muted">
          Si el predio calza, respondemos en unos días para coordinar una
          primera conversación en Las Condes o una visita al terreno.
        </p>
        <a href={studio.whatsapp} className="btn mt-8">
          Escribir por WhatsApp
        </a>
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
          <input name="predio" type="text" required />
        </label>
        <label className="field">
          <span>Tipo de encargo</span>
          <select name="type" defaultValue="Casa nueva">
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
        <span>El predio y lo que se necesita</span>
        <textarea name="message" required />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn w-fit">
          Conversar sobre tu proyecto
        </button>
        <p className="text-xs leading-5 text-muted">
          Responde el arquitecto, no un ejecutivo. Sin call center.
        </p>
      </div>
    </form>
  );
}
