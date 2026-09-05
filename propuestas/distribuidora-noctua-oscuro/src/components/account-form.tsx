"use client";

import { useMemo, useState, type FormEvent } from "react";
import { giros } from "@/data/catalog";
import { site } from "@/data/site";
import { formatRut, isValidRut } from "@/lib/rut";

const STORAGE_KEY = "noctua-cuenta-solicitud";

type Status = "idle" | "error" | "sent";

export function AccountForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [rutError, setRutError] = useState("");
  const [payload, setPayload] = useState<Record<string, string>>({});

  const whatsapp = useMemo(() => {
    if (!payload.razon) return site.whatsappHref;
    const text = [
      "Hola NOCTUA, quiero abrir cuenta comercial.",
      `Razón social: ${payload.razon}`,
      `RUT: ${payload.rut}`,
      `Giro: ${payload.giro}`,
      `Comuna: ${payload.comuna}`,
      `Encargado: ${payload.encargado}`,
      `Teléfono: ${payload.telefono}`,
    ].join("\n");
    return `https://wa.me/56976403310?text=${encodeURIComponent(text)}`;
  }, [payload]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const rut = String(data.get("rut") ?? "");
    if (!isValidRut(rut)) {
      setRutError("El RUT no calza. Revisa el dígito verificador.");
      setStatus("error");
      return;
    }

    const next = {
      razon: String(data.get("razon") ?? ""),
      rut: formatRut(rut),
      giro: String(data.get("giro") ?? ""),
      comuna: String(data.get("comuna") ?? ""),
      volumen: String(data.get("volumen") ?? ""),
      encargado: String(data.get("encargado") ?? ""),
      telefono: String(data.get("telefono") ?? ""),
      correo: String(data.get("correo") ?? ""),
      nota: String(data.get("nota") ?? ""),
    };

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore quota
    }

    setPayload(next);
    setRutError("");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-surface px-6 py-14 md:px-10">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-amber">
          Solicitud en el CD
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
          Ya está en la mesa de cuentas.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-paper-dim">
          Te escribimos en horario de CD, normalmente antes de la ronda.
          Si quieres adelantar ficha o volumen, ábrelo por WhatsApp.
        </p>
        <a href={whatsapp} className="btn btn-amber mt-10">
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            Razón social
          </span>
          <input
            required
            name="razon"
            autoComplete="organization"
            className="input-line mt-2"
            placeholder="Cocina del Parque SpA"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            RUT empresa
          </span>
          <input
            required
            name="rut"
            className="input-line mt-2"
            placeholder="77.904.331-2"
            aria-invalid={Boolean(rutError)}
            onChange={() => {
              if (rutError) setRutError("");
            }}
          />
          {rutError ? (
            <span className="mt-2 block text-xs text-amber">{rutError}</span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            Giro
          </span>
          <select name="giro" required className="input-line mt-2" defaultValue="">
            <option value="" disabled>
              Elige el tipo de cocina
            </option>
            {giros.map((giro) => (
              <option key={giro} value={giro}>
                {giro}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            Comuna de despacho
          </span>
          <input
            required
            name="comuna"
            className="input-line mt-2"
            placeholder="Providencia"
          />
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            Volumen mensual estimado
          </span>
          <select name="volumen" className="input-line mt-2" defaultValue="220-400">
            <option value="bajo-minimo">Menos del pedido mínimo</option>
            <option value="220-400">$220.000 a $400.000</option>
            <option value="400-800">$400.000 a $800.000</option>
            <option value="800-plus">Más de $800.000</option>
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            Encargado de compras
          </span>
          <input
            required
            name="encargado"
            autoComplete="name"
            className="input-line mt-2"
            placeholder="Camila Herrera"
          />
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            Teléfono
          </span>
          <input
            required
            name="telefono"
            type="tel"
            autoComplete="tel"
            className="input-line mt-2"
            placeholder="+56 9 7640 3310"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            Correo
          </span>
          <input
            required
            name="correo"
            type="email"
            autoComplete="email"
            className="input-line mt-2"
            placeholder="compras@cocina.cl"
          />
        </label>
      </div>

      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
          Qué necesitan primero
        </span>
        <textarea
          name="nota"
          className="input-line mt-2"
          placeholder="Ventanas, frecuencias, restricciones de horario en el local."
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted">
          Pedido mínimo {site.pedidoMinimoNeto.toLocaleString("es-CL")} neto. La
          cuenta corriente a 30 días se evalúa con SII y primeras guías.
        </p>
        <button type="submit" className="btn btn-amber w-fit">
          Enviar solicitud
        </button>
      </div>
    </form>
  );
}
