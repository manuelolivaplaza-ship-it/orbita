"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { previsiones, slots, specialties } from "@/data/content";
import { site } from "@/data/site";
import { formatRut, isValidEmail, isValidPhone, isValidRut } from "@/lib/format";

export function BookingForm({ preset }: { preset?: string }) {
  const searchParams = useSearchParams();
  const fromQuery = searchParams.get("especialidad");
  const initial =
    preset ??
    (fromQuery && specialties.some((item) => item.slug === fromQuery)
      ? fromQuery
      : "medicina-interna");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rut, setRut] = useState("");
  const [especialidad, setEspecialidad] = useState(initial);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const nombre = String(data.get("nombre") ?? "").trim();
    const celular = String(data.get("celular") ?? "").trim();
    const correo = String(data.get("correo") ?? "").trim();
    const especialidadValue = String(data.get("especialidad") ?? "").trim();

    if (nombre.length < 2) next.nombre = "Escriba su nombre.";
    if (!isValidPhone(celular)) next.celular = "Celular incompleto.";
    if (!isValidEmail(correo)) next.correo = "Correo inválido.";
    if (rut && !isValidRut(rut)) next.rut = "RUT inválido.";
    if (!especialidadValue) next.especialidad = "Elija una especialidad.";

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
          Te escribimos por WhatsApp dentro del día hábil para confirmar el
          cupo. Responden de la casa, no un call center. Si prefieres adelantar,
          escríbenos ahora.
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
            placeholder="+56 9 7612 4050"
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
            Especialidad
          </span>
          <select
            name="especialidad"
            className="input-line mt-2"
            value={especialidad}
            onChange={(event) => setEspecialidad(event.target.value)}
          >
            {specialties.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.especialidad ? (
            <span className="mt-2 block text-xs text-amber">
              {errors.especialidad}
            </span>
          ) : null}
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
            <option value="sabado">Sábado · 09:00 a 14:00</option>
            <option value="primera">El primero que haya</option>
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Día
          </span>
          <select name="dia" className="input-line mt-2" defaultValue="primera">
            <option value="primera">La primera noche que haya</option>
            <option value="lun-vie">Lunes a viernes</option>
            <option value="sabado">Sábado</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
          Qué te trae
        </span>
        <textarea
          name="nota"
          className="input-line mt-2"
          placeholder="El insomnio, la presión, el PAP pendiente. En tu idioma."
        />
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
          Te contactamos por WhatsApp. No cedemos datos. Si el caso es de
          urgencia, ve a un servicio de urgencia — SAMU 131.
        </p>
        <button type="submit" className="btn btn-amber w-fit">
          Pedir hora
        </button>
      </div>
    </form>
  );
}
