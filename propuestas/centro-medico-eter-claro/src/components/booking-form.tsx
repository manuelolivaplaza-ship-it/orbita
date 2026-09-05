"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { previsiones, specialties } from "@/data/content";
import { site } from "@/data/site";
import { formatRut, isValidEmail, isValidPhone, isValidRut } from "@/lib/format";

function resolveSpecialty(preset: string | undefined, query: string | null) {
  if (preset && specialties.some((item) => item.slug === preset)) return preset;
  if (query && specialties.some((item) => item.slug === query)) return query;
  return "medicina-interna";
}

export function BookingForm({ preset }: { preset?: string }) {
  const searchParams = useSearchParams();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rut, setRut] = useState("");
  const [especialidad, setEspecialidad] = useState(() =>
    resolveSpecialty(preset, searchParams.get("especialidad")),
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const nombre = String(data.get("nombre") ?? "").trim();
    const celular = String(data.get("celular") ?? "").trim();
    const correo = String(data.get("correo") ?? "").trim();
    const chosen = String(data.get("especialidad") ?? "").trim();

    if (nombre.length < 2) next.nombre = "Escriba su nombre.";
    if (!isValidPhone(celular)) next.celular = "Celular incompleto.";
    if (!isValidEmail(correo)) next.correo = "Correo inválido.";
    if (rut && !isValidRut(rut)) next.rut = "RUT inválido.";
    if (!chosen) next.especialidad = "Elija una especialidad.";

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
          Te escribimos por WhatsApp dentro del día hábil para confirmar hora y
          bono electrónico. Si el cupo de 48 horas está lleno, se lo decimos
          altiro. Responden de esta casa, no un call center.
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
            placeholder="Amanda Reyes"
          />
          {errors.nombre ? (
            <span className="mt-2 block text-xs text-eter">{errors.nombre}</span>
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
            <span className="mt-2 block text-xs text-eter">{errors.rut}</span>
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
            placeholder="+56 9 7612 4408"
          />
          {errors.celular ? (
            <span className="mt-2 block text-xs text-eter">{errors.celular}</span>
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
            placeholder="amanda@correo.cl"
          />
          {errors.correo ? (
            <span className="mt-2 block text-xs text-eter">{errors.correo}</span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
            Especialidad
          </span>
          <select
            name="especialidad"
            className="input-line mt-2"
            value={especialidad}
            onChange={(event) => setEspecialidad(event.target.value)}
          >
            {specialties.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </select>
          {errors.especialidad ? (
            <span className="mt-2 block text-xs text-eter">{errors.especialidad}</span>
          ) : null}
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

      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
          Momento
        </span>
        <select name="momento" className="input-line mt-2" defaultValue="primera">
          <option value="manana">Mañana · 8:00 a 12:30</option>
          <option value="tarde">Tarde · 14:00 a 20:00</option>
          <option value="sabado">Sábado · 8:30 a 14:00</option>
          <option value="primera">La primera hora en 48 h</option>
        </select>
      </label>

      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
          Qué le trae
        </span>
        <textarea
          name="nota"
          className="input-line mt-2"
          placeholder="El control, la presión, el lunar. En su idioma. No diagnostica este recuadro."
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-tinta-suave">
        <input
          required
          type="checkbox"
          name="privacidad"
          className="mt-1 h-4 w-4 appearance-none border border-linea bg-transparent checked:border-tinta checked:bg-tinta"
        />
        <span>
          Acepto el tratamiento de mis datos para agendar, según la{" "}
          <a href="/privacidad" className="link-eter">
            política de privacidad
          </a>
          .
        </span>
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-gris">
          Te contactamos por WhatsApp. No cedemos datos. El valor final y el
          bono se confirman al agendar, no después de llegar.
        </p>
        <button type="submit" className="btn btn-ink w-fit">
          Pedir hora
        </button>
      </div>
    </form>
  );
}
