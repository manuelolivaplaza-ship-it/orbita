"use client";

import { useMemo, useState, type FormEvent } from "react";
import { sucursales } from "@/data/sucursales";
import { site } from "@/data/site";
import { formatRut, isValidRut } from "@/lib/rut";

type Mode = "sucursal" | "domicilio";

export function BookingForm({ defaultMode = "sucursal" }: { defaultMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [rut, setRut] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const tomorrow = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().slice(0, 10);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValidRut(rut)) {
      setError("Revisa el RUT: el dígito verificador no calza.");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-cream px-6 py-10 md:px-10">
        <p className="eyebrow">Hora en espera</p>
        <h2 className="display mt-4 text-4xl md:text-5xl">La recibimos.</h2>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
          Te escribimos por WhatsApp en menos de 30 minutos para confirmar
          sucursal, horario y preparación. Si es para mañana temprano, deja el
          teléfono a mano.
        </p>
        <a href={site.whatsappHref} className="btn btn-ink mt-8" target="_blank" rel="noreferrer">
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-7">
      <div className="flex gap-2">
        {(
          [
            ["sucursal", "En sucursal"],
            ["domicilio", "A domicilio"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setMode(value)}
            className={`rounded-full px-4 py-2 text-[0.72rem] tracking-[0.14em] uppercase ${
              mode === value ? "bg-ink text-cream" : "border border-line text-mute"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <label>
        <span className="field-label">Nombre completo</span>
        <input className="input" name="nombre" required autoComplete="name" />
      </label>

      <div className="grid gap-7 md:grid-cols-2">
        <label>
          <span className="field-label">RUT</span>
          <input
            className="input"
            name="rut"
            required
            inputMode="text"
            placeholder="12.345.678-9"
            value={rut}
            onChange={(event) => setRut(formatRut(event.target.value))}
          />
        </label>
        <label>
          <span className="field-label">Teléfono</span>
          <input
            className="input"
            name="telefono"
            required
            type="tel"
            autoComplete="tel"
            placeholder="+56 9"
          />
        </label>
      </div>

      <label>
        <span className="field-label">Correo</span>
        <input
          className="input"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </label>

      {mode === "sucursal" ? (
        <label>
          <span className="field-label">Sucursal</span>
          <select className="input select" name="sucursal" defaultValue={sucursales[0].slug}>
            {sucursales.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.nombre} · {item.direccion}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <label>
          <span className="field-label">Dirección y comuna</span>
          <input
            className="input"
            name="direccion"
            required
            placeholder="Calle, número, depto, comuna"
          />
        </label>
      )}

      <div className="grid gap-7 md:grid-cols-2">
        <label>
          <span className="field-label">Fecha preferida</span>
          <input className="input" name="fecha" type="date" required min={tomorrow} />
        </label>
        <label>
          <span className="field-label">Franja</span>
          <select className="input select" name="franja" defaultValue="manana">
            <option value="manana">Mañana · 7:00 a 10:30 (ayuno)</option>
            <option value="media">Mediodía · 10:30 a 14:00</option>
            <option value="tarde">Tarde · 14:00 a 18:30</option>
          </select>
        </label>
      </div>

      <label>
        <span className="field-label">Exámenes o chequeo</span>
        <textarea
          className="textarea"
          name="examenes"
          placeholder="Hemograma, perfil lipídico, TSH… o el nombre del chequeo."
        />
      </label>

      {error ? <p className="text-sm text-[#9a5a3a]">{error}</p> : null}

      <button type="submit" className="btn btn-ink w-fit">
        Pedir hora
      </button>
      <p className="text-sm text-mute">
        Confirmamos por WhatsApp. Si el médico te pidió ayuno, te recordamos la
        noche anterior.
      </p>
    </form>
  );
}
