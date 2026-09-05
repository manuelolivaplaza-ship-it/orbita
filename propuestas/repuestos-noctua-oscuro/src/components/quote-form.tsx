"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";
import { comunas, families, giros, type FamilyId } from "@/data/catalog";
import { site } from "@/data/site";
import { formatRut, isValidRut } from "@/lib/format";

const STORAGE_KEY = "noctua-cruce";

type Status = "idle" | "error" | "sent";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const fromFamily = searchParams.get("familia");
  const fromPlate = searchParams.get("patente") ?? "";
  const fromVehicle = searchParams.get("vehiculo") ?? "";
  const fromSku = searchParams.get("sku") ?? "";
  const presetFamily = families.some((item) => item.id === fromFamily)
    ? (fromFamily as FamilyId)
    : undefined;

  const [status, setStatus] = useState<Status>("idle");
  const [rutError, setRutError] = useState("");
  const [payload, setPayload] = useState<Record<string, string>>({});

  const whatsapp = useMemo(() => {
    if (!payload.nombre) return site.whatsappHref;
    const text = [
      "Hola NOCTUA, quiero cruzar una pieza.",
      `Nombre: ${payload.nombre}`,
      payload.rut ? `RUT: ${payload.rut}` : "",
      `Giro: ${payload.giro}`,
      `Patente: ${payload.patente}`,
      `Vehículo: ${payload.vehiculo}`,
      `Familia: ${payload.familia}`,
      payload.sku ? `SKU / OEM: ${payload.sku}` : "",
      `Entrega: ${payload.entrega}`,
      `Comuna: ${payload.comuna}`,
      payload.nota ? `Nota: ${payload.nota}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/56964120904?text=${encodeURIComponent(text)}`;
  }, [payload]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const rut = String(data.get("rut") ?? "");
    if (rut && !isValidRut(rut)) {
      setRutError("El RUT no calza. Revisa el dígito verificador.");
      setStatus("error");
      return;
    }

    const next = {
      nombre: String(data.get("nombre") ?? ""),
      rut: rut ? formatRut(rut) : "",
      giro: String(data.get("giro") ?? ""),
      telefono: String(data.get("telefono") ?? ""),
      patente: String(data.get("patente") ?? ""),
      vehiculo: String(data.get("vehiculo") ?? ""),
      familia: String(data.get("familia") ?? ""),
      sku: String(data.get("sku") ?? ""),
      entrega: String(data.get("entrega") ?? ""),
      comuna: String(data.get("comuna") ?? ""),
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
      <div className="border border-line bg-nave px-6 py-14 md:px-10">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-sodium">
          Lista en el mesón
        </p>
        <h2 className="mt-4 font-display text-4xl font-medium tracking-wide">
          Ya está en cruce.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-mute">
          Te escribimos en horario de turno. Si el taller no espera, adelántala
          por WhatsApp.
        </p>
        <a href={whatsapp} className="btn btn-sodium mt-10">
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Nombre
          </span>
          <input
            required
            name="nombre"
            autoComplete="name"
            className="input-line mt-2"
            placeholder="Catalina Soto"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            RUT (opcional)
          </span>
          <input
            name="rut"
            className="input-line mt-2"
            placeholder="77.641.209-0"
            aria-invalid={Boolean(rutError)}
            onChange={() => {
              if (rutError) setRutError("");
            }}
          />
          {rutError ? (
            <span className="mt-2 block text-xs text-oxide">{rutError}</span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Giro
          </span>
          <select name="giro" required className="input-line mt-2" defaultValue="">
            <option value="" disabled>
              Quién compra
            </option>
            {giros.map((giro) => (
              <option key={giro} value={giro}>
                {giro}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Teléfono
          </span>
          <input
            required
            name="telefono"
            type="tel"
            autoComplete="tel"
            className="input-line mt-2"
            placeholder="+56 9 6412 0904"
          />
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Patente
          </span>
          <input
            name="patente"
            className="input-line mt-2 uppercase"
            defaultValue={fromPlate}
            placeholder="RKJD 27"
            autoComplete="off"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Vehículo
          </span>
          <input
            name="vehiculo"
            className="input-line mt-2"
            defaultValue={fromVehicle}
            placeholder="Toyota Hilux 2022"
          />
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Familia
          </span>
          <select
            name="familia"
            required
            className="input-line mt-2"
            defaultValue={
              families.find((item) => item.id === presetFamily)?.name ?? ""
            }
          >
            <option value="" disabled>
              Bahía de la bodega
            </option>
            {families.map((family) => (
              <option key={family.id} value={family.name}>
                {family.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            SKU o OEM
          </span>
          <input
            name="sku"
            className="input-line mt-2 uppercase"
            defaultValue={fromSku}
            placeholder="NX-FR-440 / 43512-0K090"
          />
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Entrega
          </span>
          <select name="entrega" required className="input-line mt-2" defaultValue="">
            <option value="" disabled>
              Cómo sale
            </option>
            <option value="Retiro en bahía 05:30">Retiro en bahía 05:30</option>
            <option value="Despacho a taller">Despacho a taller</option>
            <option value="Despacho a faena">Despacho a faena</option>
            <option value="Retiro en mesón">Retiro en mesón</option>
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Comuna
          </span>
          <select name="comuna" required className="input-line mt-2" defaultValue="">
            <option value="" disabled>
              Dónde llega
            </option>
            {comunas.map((comuna) => (
              <option key={comuna} value={comuna}>
                {comuna}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
          Nota
        </span>
        <textarea
          name="nota"
          className="input-line mt-2"
          placeholder="Eje, lado, síntoma, horario de retiro."
        />
      </label>

      <button type="submit" className="btn btn-sodium w-fit">
        Enviar al mesón
      </button>
    </form>
  );
}
