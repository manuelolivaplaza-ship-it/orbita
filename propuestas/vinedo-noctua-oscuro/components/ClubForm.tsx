"use client";

import { useState } from "react";
import { clubTiers } from "@/lib/experiences";

export function ClubForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-bone/10 bg-night p-8">
        <p className="kicker">Círculo</p>
        <p className="mt-4 font-display text-3xl italic text-parchment">
          Recibimos tu solicitud. El primer despacho sale con la luna siguiente.
        </p>
      </div>
    );
  }

  return (
    <form
      className="border border-bone/10 bg-night p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <p className="kicker">Inscripción</p>
      <h2 className="mt-3 font-display text-3xl font-light">
        Un cupo por trimestre.
      </h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="kicker">Nombre</span>
          <input className="field mt-2" name="nombre" required />
        </label>
        <label className="block">
          <span className="kicker">Correo</span>
          <input className="field mt-2" name="email" type="email" required />
        </label>
        <label className="block sm:col-span-2">
          <span className="kicker">Nivel</span>
          <select className="field mt-2" name="nivel" defaultValue="plenilunio">
            {clubTiers.map((tier) => (
              <option key={tier.id} value={tier.id} className="bg-night">
                {tier.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="kicker">Comuna de despacho</span>
          <input className="field mt-2" name="comuna" required />
        </label>
      </div>
      <button className="btn mt-10" type="submit">
        Solicitar cupo
      </button>
    </form>
  );
}
