"use client";

import { useState } from "react";
import { experiences } from "@/lib/experiences";

export function VisitForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-bone/10 bg-night p-8 md:p-10">
        <p className="kicker">Solicitud recibida</p>
        <p className="mt-4 font-display text-3xl italic text-parchment">
          Quedó registrada tu visita. Te escribimos dentro de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form
      className="border border-bone/10 bg-night p-8 md:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <p className="kicker">Reserva</p>
      <h2 className="mt-3 font-display text-3xl font-light">
        Escribe y elige la noche.
      </h2>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="kicker">Nombre</span>
          <input className="field mt-2" name="nombre" required autoComplete="name" />
        </label>
        <label className="block">
          <span className="kicker">Correo</span>
          <input
            className="field mt-2"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </label>
        <label className="block">
          <span className="kicker">Teléfono</span>
          <input
            className="field mt-2"
            name="telefono"
            type="tel"
            placeholder="+56 9"
            required
            autoComplete="tel"
          />
        </label>
        <label className="block">
          <span className="kicker">Fecha</span>
          <input className="field mt-2" name="fecha" type="date" required />
        </label>
        <label className="block sm:col-span-2">
          <span className="kicker">Experiencia</span>
          <select className="field mt-2" name="experiencia" required defaultValue={experiences[0].id}>
            {experiences.map((item) => (
              <option key={item.id} value={item.id} className="bg-night">
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="kicker">Personas</span>
          <input
            className="field mt-2"
            name="personas"
            type="number"
            min={2}
            max={10}
            defaultValue={2}
            required
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="kicker">Notas</span>
          <textarea
            className="field mt-2 min-h-24 resize-y"
            name="notas"
            placeholder="Alergias, traslado desde Vicuña, ocasión."
          />
        </label>
      </div>

      <button className="btn mt-10" type="submit">
        Enviar solicitud
      </button>
      <p className="mt-4 text-xs text-mist">
        Confirmamos cupo por correo. No se cobra al reservar.
      </p>
    </form>
  );
}
