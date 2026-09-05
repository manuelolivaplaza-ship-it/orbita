"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

export function VisitForm({
  presetSlug,
  options,
}: {
  presetSlug?: string;
  options: { slug: string; label: string }[];
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-surface px-8 py-16">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
          Recibida
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
          Ya está en la casa.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-paper-dim">
          Te escribimos por WhatsApp dentro del día, en horario de casa, para
          confirmar hora y pieza. Si prefieres adelantar, escríbenos ahora.
        </p>
        <a href={site.whatsappHref} className="btn btn-amber mt-10">
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Nombre
          </span>
          <input
            required
            name="nombre"
            autoComplete="given-name"
            className="input-line mt-2"
            placeholder="Elena"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Apellido
          </span>
          <input
            required
            name="apellido"
            autoComplete="family-name"
            className="input-line mt-2"
            placeholder="Vidal"
          />
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Celular
          </span>
          <input
            required
            name="celular"
            type="tel"
            autoComplete="tel"
            className="input-line mt-2"
            placeholder="+56 9 5188 2400"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Correo
          </span>
          <input
            required
            name="correo"
            type="email"
            autoComplete="email"
            className="input-line mt-2"
            placeholder="elena@correo.cl"
          />
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Pieza de interés
          </span>
          <select
            name="pieza"
            className="input-line mt-2"
            defaultValue={presetSlug ?? ""}
          >
            <option value="">La casa, sin una pieza aún</option>
            {options.map((vehicle) => (
              <option key={vehicle.slug} value={vehicle.slug}>
                {vehicle.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Hora
          </span>
          <select name="momento" className="input-line mt-2" defaultValue="20">
            <option value="18">18:00 · crepúsculo</option>
            <option value="19">19:00</option>
            <option value="20">20:00 · hora Noctua</option>
            <option value="21">21:00</option>
            <option value="22">22:00 · última</option>
            <option value="sabado">Sábado, a convenir</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
          Nota
        </span>
        <textarea
          name="nota"
          className="input-line mt-2"
          placeholder="Cómo te gusta conducir, o qué te trae a la casa."
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted">
          Te contactamos por WhatsApp. No cedemos datos. La visita dura alrededor
          de cuarenta minutos, de martes a sábado, después de las 18:00.
        </p>
        <button type="submit" className="btn btn-amber w-fit">
          Solicitar visita
        </button>
      </div>
    </form>
  );
}

export function VisitFormFromQuery({
  options,
}: {
  options: { slug: string; label: string }[];
}) {
  const params = useSearchParams();
  const pieza = params.get("pieza") ?? undefined;
  return <VisitForm presetSlug={pieza} options={options} />;
}
