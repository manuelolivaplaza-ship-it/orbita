"use client";

import { useEffect, useState, type FormEvent } from "react";
import { services, previsiones, comunas } from "@/data/content";
import { site } from "@/data/site";
import { formatRut, isValidEmail, isValidPhone, isValidRut } from "@/lib/format";

export function BookingForm({ preset }: { preset?: string }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rut, setRut] = useState("");
  const [enfoque, setEnfoque] = useState(preset ?? "evaluacion");

  useEffect(() => {
    if (preset) return;
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("enfoque");
    if (fromQuery && services.some((item) => item.slug === fromQuery)) {
      setEnfoque(fromQuery);
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
    const enfoque = String(data.get("enfoque") ?? "").trim();

    if (nombre.length < 2) next.nombre = "Escriba su nombre.";
    if (!isValidPhone(celular)) next.celular = "Celular incompleto.";
    if (!isValidEmail(correo)) next.correo = "Correo inválido.";
    if (rut && !isValidRut(rut)) next.rut = "RUT inválido.";
    if (!enfoque) next.enfoque = "Elija un enfoque, o evaluación.";

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
          Te escribimos por WhatsApp dentro del día hábil para confirmar hora.
          Responden kinesiólogos, no un call center. Si prefieres adelantar,
          escríbenos ahora.
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
            <span className="mt-2 block text-xs text-teal">{errors.nombre}</span>
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
            <span className="mt-2 block text-xs text-teal">{errors.rut}</span>
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
            <span className="mt-2 block text-xs text-teal">{errors.celular}</span>
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
            placeholder="antonia@correo.cl"
          />
          {errors.correo ? (
            <span className="mt-2 block text-xs text-teal">{errors.correo}</span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
            Enfoque
          </span>
          <select
            name="enfoque"
            className="input-line mt-2"
            value={enfoque}
            onChange={(event) => setEnfoque(event.target.value)}
          >
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.enfoque ? (
            <span className="mt-2 block text-xs text-teal">{errors.enfoque}</span>
          ) : null}
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
            Dónde
          </span>
          <select name="lugar" className="input-line mt-2" defaultValue="box">
            <option value="box">Box · San Damián 1280</option>
            <option value="domicilio">Domicilio</option>
            <option value="no-se">Aún no lo sé</option>
          </select>
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
            Comuna
          </span>
          <select name="comuna" className="input-line mt-2" defaultValue="Las Condes">
            {comunas.map((comuna) => (
              <option key={comuna} value={comuna}>
                {comuna}
              </option>
            ))}
            <option value="otra">Otra</option>
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

      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
          Momento
        </span>
        <select name="momento" className="input-line mt-2" defaultValue="primera">
          <option value="manana">Mañana · 8:00 a 12:30</option>
          <option value="tarde">Tarde · 14:00 a 20:00</option>
          <option value="sabado">Sábado · 9:00 a 14:00</option>
          <option value="primera">La primera hora que haya</option>
        </select>
      </label>

      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
          Qué te trae
        </span>
        <textarea
          name="nota"
          className="input-line mt-2"
          placeholder="El hombro, la rodilla, el post operatorio. En tu idioma."
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
          <a href="/privacidad" className="link-teal">
            política de privacidad
          </a>
          .
        </span>
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-gris">
          Te contactamos por WhatsApp. No cedemos datos. El valor final se
          confirma en la evaluación, no antes.
        </p>
        <button type="submit" className="btn btn-ink w-fit">
          Pedir evaluación
        </button>
      </div>
    </form>
  );
}
