"use client";

import { useState } from "react";
import { properties } from "@/data/properties";
import { whatsappHref } from "@/lib/format";

export function VisitForm({ preset }: { preset?: string }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [property, setProperty] = useState(preset ?? "");

  if (sent) {
    return (
      <div className="border border-[var(--line-gold)] bg-[var(--gold-dim)] p-8">
        <p className="kicker">Solicitud recibida</p>
        <h3 className="mt-4 font-display text-4xl italic">La casa espera.</h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          Te escribimos dentro del día hábil para coordinar la visita —casi siempre
          al atardecer. Si prefieres, también puedes insistir por WhatsApp.
        </p>
        <a
          className="btn-gold mt-8"
          href={whatsappHref(
            `Hola, soy ${name || "un interesado"}. Quisiera coordinar una visita privada${property ? ` a ${property}` : ""}.`,
          )}
          target="_blank"
          rel="noreferrer"
        >
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      className="grid gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="block">
        <span className="kicker">Nombre</span>
        <input
          required
          className="field mt-2"
          name="nombre"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="kicker">Correo</span>
        <input
          required
          type="email"
          className="field mt-2"
          name="email"
          autoComplete="email"
        />
      </label>
      <label className="block">
        <span className="kicker">Teléfono</span>
        <input
          required
          className="field mt-2"
          name="telefono"
          autoComplete="tel"
          placeholder="+56 9"
        />
      </label>
      <label className="block">
        <span className="kicker">Residencia</span>
        <select
          className="field mt-2"
          name="propiedad"
          value={property}
          onChange={(e) => setProperty(e.target.value)}
        >
          <option value="">Aún no lo sé — quiero conversar</option>
          {properties
            .filter((p) => p.status !== "entregada")
            .map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name} · {p.comuna}
              </option>
            ))}
        </select>
      </label>
      <label className="block">
        <span className="kicker">Nota</span>
        <textarea
          className="field mt-2 min-h-28 resize-y"
          name="nota"
          placeholder="Ritmo de vida, plazos, si buscan primera residencia o un segundo umbral."
        />
      </label>
      <button type="submit" className="btn-solid mt-2 w-full sm:w-auto">
        Solicitar visita
      </button>
      <p className="text-xs leading-relaxed text-muted">
        Sin open house. Sin cartel. Coordinamos un horario y abrimos la puerta.
      </p>
    </form>
  );
}
