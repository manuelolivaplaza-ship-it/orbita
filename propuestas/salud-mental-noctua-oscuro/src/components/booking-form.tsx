"use client";

import { useEffect, useState, type FormEvent } from "react";
import { areas, previsiones, slots, team } from "@/data/content";
import { site } from "@/data/site";
import { formatRut, isValidEmail, isValidPhone, isValidRut } from "@/lib/format";

export function BookingForm({ preset }: { preset?: string }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rut, setRut] = useState("");
  const [area, setArea] = useState(preset ?? "");

  useEffect(() => {
    if (preset) return;
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("area");
    if (fromQuery && areas.some((item) => item.slug === fromQuery)) {
      setArea(fromQuery);
    }
  }, [preset]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const nombre = String(data.get("nombre") ?? "").trim();
    const celular = String(data.get("celular") ?? "").trim();
    const correo = String(data.get("correo") ?? "").trim();
    const motivo = String(data.get("motivo") ?? "").trim();

    if (nombre.length < 2) next.nombre = "Escribe tu nombre.";
    if (!isValidPhone(celular)) next.celular = "Celular incompleto.";
    if (!isValidEmail(correo)) next.correo = "Correo inválido.";
    if (rut && !isValidRut(rut)) next.rut = "RUT inválido.";
    if (motivo.length < 8)
      next.motivo = "Cuéntanos un poco más. No hace falta diagnóstico.";

    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-surface px-8 py-16">
        <p className="kicker">Recibida</p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
          Ya está en la casa.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-paper-dim">
          Leemos lo que escribiste y te proponemos una persona — no el hueco
          más cercano. Te escribimos por WhatsApp dentro del día hábil.
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
            placeholder="Elisa Moreno"
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
            autoComplete="off"
            className="input-line mt-2"
            placeholder="12.345.678-9"
            value={rut}
            onChange={(event) => setRut(formatRut(event.target.value))}
          />
          {errors.rut ? (
            <span className="mt-2 block text-xs text-amber">{errors.rut}</span>
          ) : null}
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
            placeholder="+56 9 7612 4770"
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
            placeholder="elisa@correo.cl"
          />
          {errors.correo ? (
            <span className="mt-2 block text-xs text-amber">{errors.correo}</span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Área
          </span>
          <select
            name="area"
            className="input-line mt-2"
            value={area}
            onChange={(event) => setArea(event.target.value)}
          >
            <option value="">Aún no lo sé</option>
            {areas.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
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

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Cupo
          </span>
          <select name="cupo" className="input-line mt-2" defaultValue="20:00">
            {slots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
                {slot === "22:00" ? " · último" : ""}
              </option>
            ))}
            <option value="sabado">Sábado · 10:00 a 14:00</option>
            <option value="online">Online · misma hora</option>
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Preferencia de persona
          </span>
          <select name="persona" className="input-line mt-2" defaultValue="">
            <option value="">Que emparejen ustedes</option>
            {team.map((person) => (
              <option key={person.slug} value={person.slug}>
                {person.name} · {person.focus}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
          Qué te trae
        </span>
        <textarea
          name="motivo"
          className="input-line mt-2"
          placeholder="El pecho, el insomnio, lo que no se nombra de día. En tu idioma."
        />
        {errors.motivo ? (
          <span className="mt-2 block text-xs text-amber">{errors.motivo}</span>
        ) : null}
      </label>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-paper-dim">
        <input
          required
          type="checkbox"
          name="privacidad"
          className="mt-1 h-4 w-4 appearance-none border border-line bg-transparent checked:border-amber checked:bg-amber"
        />
        <span>
          Acepto el tratamiento de mis datos para agendar, según la{" "}
          <a href="/privacidad" className="link-line text-paper">
            política de privacidad
          </a>
          .
        </span>
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted">
          Te contactamos por WhatsApp. No cedemos datos. Si ahora hay riesgo,
          llama a Salud Responde {site.crisis.phone} o al {site.crisis.alt}.
        </p>
        <button type="submit" className="btn btn-amber w-fit">
          Pedir primera hora
        </button>
      </div>
    </form>
  );
}
