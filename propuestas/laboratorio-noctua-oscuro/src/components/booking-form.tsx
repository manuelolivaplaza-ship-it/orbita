"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { chequeos } from "@/data/chequeos";
import { previsiones, slots } from "@/data/content";
import { examenes } from "@/data/examenes";
import { sucursales } from "@/data/sucursales";
import { site } from "@/data/site";
import { formatRut, isValidEmail, isValidPhone, isValidRut } from "@/lib/format";

export function BookingForm({ preset }: { preset?: string }) {
  const searchParams = useSearchParams();
  const fromQuery = searchParams.get("examen") ?? searchParams.get("chequeo") ?? preset;
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rut, setRut] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const nombre = String(data.get("nombre") ?? "").trim();
    const celular = String(data.get("celular") ?? "").trim();
    const correo = String(data.get("correo") ?? "").trim();

    if (nombre.length < 2) next.nombre = "Escribe tu nombre.";
    if (!isValidPhone(celular)) next.celular = "Celular incompleto.";
    if (!isValidEmail(correo)) next.correo = "Correo inválido.";
    if (rut && !isValidRut(rut)) next.rut = "RUT inválido.";

    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-surface px-8 py-16">
        <p className="kicker">Recibida</p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
          Ya está en el turno.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-paper-dim">
          Te escribimos por WhatsApp dentro del día para confirmar el cupo y la
          preparación exacta. Si el examen pide ayuno, te lo repetimos en
          claro. Responde el laboratorio, no un call center.
        </p>
        <a href={site.whatsappHref} className="btn btn-amber mt-10">
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8" noValidate>
      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Nombre
          </span>
          <input
            required
            name="nombre"
            autoComplete="name"
            className="input-line mt-2"
            placeholder="Catalina Rojas"
          />
          {errors.nombre ? (
            <span className="mt-2 block text-xs text-amber">{errors.nombre}</span>
          ) : null}
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            RUT
          </span>
          <input
            name="rut"
            value={rut}
            onChange={(event) => setRut(formatRut(event.target.value))}
            className="input-line mt-2 nums"
            placeholder="12.345.678-9"
            autoComplete="off"
          />
          {errors.rut ? (
            <span className="mt-2 block text-xs text-amber">{errors.rut}</span>
          ) : null}
        </label>
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
            placeholder="+56 9 1234 5678"
          />
          {errors.celular ? (
            <span className="mt-2 block text-xs text-amber">{errors.celular}</span>
          ) : null}
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
            placeholder="tu@correo.cl"
          />
          {errors.correo ? (
            <span className="mt-2 block text-xs text-amber">{errors.correo}</span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Qué te tomamos
          </span>
          <select
            name="examen"
            className="input-line mt-2"
            defaultValue={fromQuery ?? ""}
          >
            <option value="">Aún no lo sé — me orientan</option>
            <optgroup label="Chequeos">
              {chequeos.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.nombre}
                </option>
              ))}
            </optgroup>
            <optgroup label="Exámenes">
              {examenes.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.nombre}
                </option>
              ))}
            </optgroup>
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Dónde
          </span>
          <select name="lugar" className="input-line mt-2" defaultValue="vitacura">
            {sucursales.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.nombre} — {item.rol}
              </option>
            ))}
            <option value="domicilio">Domicilio</option>
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Preferencia de hora
          </span>
          <select name="slot" className="input-line mt-2" defaultValue="07:00">
            {slots.map((item) => (
              <option key={item} value={item}>
                {item} {Number(item.slice(0, 2)) >= 16 ? "· ocaso" : "· amanecer"}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Previsión
          </span>
          <select name="prevision" className="input-line mt-2" defaultValue="Particular">
            {previsiones.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
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
          placeholder="Ayuno, miedo a las agujas, orden médica, algo que debamos saber."
        />
      </label>

      <button type="submit" className="btn btn-amber w-fit">
        Pedir hora
      </button>
      <p className="max-w-md text-xs leading-relaxed text-muted">
        Esta es una propuesta. El envío no agenda de verdad: te mostramos el
        gesto. En producción, confirma por WhatsApp y queda en la ficha.
      </p>
    </form>
  );
}
