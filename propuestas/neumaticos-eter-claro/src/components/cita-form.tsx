"use client";

import { useEffect, useState, type FormEvent } from "react";
import { servicios } from "@/data/content";
import { site } from "@/data/site";
import { formatPatente, isValidPatente, isValidPhone } from "@/lib/format";

export function CitaForm({
  presetMedida,
  presetServicio,
}: {
  presetMedida?: string;
  presetServicio?: string;
}) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [patente, setPatente] = useState("");
  const [medida, setMedida] = useState(presetMedida ?? "");
  const [servicio, setServicio] = useState(presetServicio ?? "montaje");

  useEffect(() => {
    if (presetMedida) return;
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("medida");
    if (fromQuery) setMedida(fromQuery);
    const fromServicio = params.get("servicio");
    if (fromServicio) setServicio(fromServicio);
  }, [presetMedida]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const nombre = String(data.get("nombre") ?? "").trim();
    const celular = String(data.get("celular") ?? "").trim();
    const medidaValue = String(data.get("medida") ?? "").trim();
    const servicioValue = String(data.get("servicio") ?? "").trim();

    if (nombre.length < 2) next.nombre = "Escriba su nombre.";
    if (!isValidPhone(celular)) next.celular = "Celular incompleto.";
    if (patente && !isValidPatente(patente)) next.patente = "Patente inválida.";
    if (!medidaValue) next.medida = "Indique la medida, o la patente.";
    if (!servicioValue) next.servicio = "Elija un oficio.";

    setErrors(next);
    if (Object.keys(next).length) return;

    const text = encodeURIComponent(
      `Hola ETER, soy ${nombre}. Medida ${medidaValue}${patente ? `, patente ${patente}` : ""}. Quiero agendar ${servicioValue}.`,
    );
    window.open(`https://wa.me/56944182703?text=${text}`, "_blank", "noopener");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-paper-2/70 px-8 py-16">
        <p className="kicker">Recibida</p>
        <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
          Ya está en el taller.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
          Te escribimos por WhatsApp dentro del día hábil para confirmar hora y
          stock. Si la llanta está ponchada, ábrelo ahora.
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
          <span className="kicker">Nombre</span>
          <input
            required
            name="nombre"
            autoComplete="name"
            className="input-line mt-2"
            placeholder="Antonia Vidal"
          />
          {errors.nombre ? (
            <span className="mt-2 block text-xs text-goma">{errors.nombre}</span>
          ) : null}
        </label>
        <label className="block">
          <span className="kicker">Celular</span>
          <input
            required
            name="celular"
            type="tel"
            autoComplete="tel"
            className="input-line mt-2"
            placeholder="+56 9 4418 2703"
          />
          {errors.celular ? (
            <span className="mt-2 block text-xs text-goma">{errors.celular}</span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="kicker">Patente</span>
          <input
            name="patente"
            autoComplete="off"
            className="input-line mt-2"
            placeholder="BBCL12"
            value={patente}
            onChange={(event) => setPatente(formatPatente(event.target.value))}
          />
          {errors.patente ? (
            <span className="mt-2 block text-xs text-goma">{errors.patente}</span>
          ) : null}
        </label>
        <label className="block">
          <span className="kicker">Medida</span>
          <input
            name="medida"
            className="input-line mt-2"
            placeholder="205/55 R16"
            value={medida}
            onChange={(event) => setMedida(event.target.value)}
          />
          {errors.medida ? (
            <span className="mt-2 block text-xs text-goma">{errors.medida}</span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="kicker">Oficio</span>
          <select
            name="servicio"
            className="input-line mt-2"
            value={servicio}
            onChange={(event) => setServicio(event.target.value)}
          >
            {servicios.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="kicker">Día preferido</span>
          <input name="dia" type="date" className="input-line mt-2" />
        </label>
      </div>

      <label className="block">
        <span className="kicker">Nota</span>
        <textarea
          name="nota"
          className="input-line mt-2"
          placeholder="Ponchada, flota, Farellones el sábado…"
        />
      </label>

      <div className="flex flex-wrap items-center gap-6">
        <button type="submit" className="btn btn-ink">
          Enviar y abrir WhatsApp
        </button>
        <p className="max-w-xs text-xs leading-relaxed text-muted">
          Respondemos personas del taller, no un bot. Si no hay stock, te lo
          decimos en el mismo hilo.
        </p>
      </div>
    </form>
  );
}
