"use client";

import { useEffect, useState, type FormEvent } from "react";
import { areas, previsiones } from "@/data/content";
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
    if (motivo.length < 8) next.motivo = "Cuéntanos un poco más. No hace falta diagnóstico.";

    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-linea bg-papel-2/60 px-8 py-16">
        <p className="kicker">Recibida</p>
        <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
          Ya está en la casa.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-tinta-suave">
          Leemos lo que escribiste y te proponemos una persona — no el hueco
          más cercano. Te escribimos por WhatsApp dentro del día hábil.
        </p>
        <a href={site.whatsappHref} className="btn btn-ink mt-10">
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8" noValidate>
      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
            Nombre
          </span>
          <input
            required
            name="nombre"
            autoComplete="name"
            className="input-line mt-2"
            placeholder="Antonia Vidal"
          />
          {errors.nombre ? (
            <span className="mt-2 block text-xs text-sage-deep">{errors.nombre}</span>
          ) : null}
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
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
            <span className="mt-2 block text-xs text-sage-deep">{errors.rut}</span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
            Celular
          </span>
          <input
            required
            name="celular"
            type="tel"
            autoComplete="tel"
            className="input-line mt-2"
            placeholder="+56 9 7612 8804"
          />
          {errors.celular ? (
            <span className="mt-2 block text-xs text-sage-deep">{errors.celular}</span>
          ) : null}
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
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
            <span className="mt-2 block text-xs text-sage-deep">{errors.correo}</span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
            Área, si la tienes clara
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
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
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
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
            Modalidad
          </span>
          <select name="modalidad" className="input-line mt-2" defaultValue="Presencial">
            <option>Presencial</option>
            <option>Online</option>
            <option>Indiferente</option>
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
            Preferencia horaria
          </span>
          <select name="horario" className="input-line mt-2" defaultValue="Tarde">
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Después de las 18:00</option>
            <option>Sábado</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
          Qué pesa, en tus palabras
        </span>
        <textarea
          required
          name="motivo"
          className="input-line mt-2"
          placeholder="No hace falta un diagnóstico. Basta con lo que te trae."
        />
        {errors.motivo ? (
          <span className="mt-2 block text-xs text-sage-deep">{errors.motivo}</span>
        ) : null}
      </label>

      <p className="text-sm leading-relaxed text-gris">
        Leemos esto las personas de la casa. No un algoritmo. Si ahora es
        demasiado, llama a Salud Responde {site.crisis.phone}.
      </p>

      <button type="submit" className="btn btn-ink w-fit">
        Enviar
      </button>
    </form>
  );
}
