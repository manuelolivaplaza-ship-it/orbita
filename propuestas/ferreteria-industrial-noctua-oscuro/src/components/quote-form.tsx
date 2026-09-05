"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";
import { families, giros, type FamilyId } from "@/data/catalog";
import { site } from "@/data/site";
import { formatRut, isValidRut } from "@/lib/rut";

const STORAGE_KEY = "noctua-cotizacion";

type Status = "idle" | "error" | "sent";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const fromQuery = searchParams.get("familia");
  const presetFamily = families.some((item) => item.id === fromQuery)
    ? (fromQuery as FamilyId)
    : undefined;
  const [status, setStatus] = useState<Status>("idle");
  const [rutError, setRutError] = useState("");
  const [payload, setPayload] = useState<Record<string, string>>({});

  const whatsapp = useMemo(() => {
    if (!payload.nombre) return site.whatsappHref;
    const text = [
      "Hola NOCTUA, quiero cotizar una lista de corte.",
      `Nombre: ${payload.nombre}`,
      payload.rut ? `RUT: ${payload.rut}` : "",
      `Giro: ${payload.giro}`,
      `Familia: ${payload.familia}`,
      `Medida: ${payload.medida}`,
      `Cantidad: ${payload.cantidad}`,
      `Corte: ${payload.corte}`,
      `Entrega: ${payload.entrega}`,
      `Comuna: ${payload.comuna}`,
      payload.nota ? `Nota: ${payload.nota}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/56958819004?text=${encodeURIComponent(text)}`;
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
      familia: String(data.get("familia") ?? ""),
      medida: String(data.get("medida") ?? ""),
      cantidad: String(data.get("cantidad") ?? ""),
      corte: String(data.get("corte") ?? ""),
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
          Ya está en nave.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-mute">
          Te escribimos en horario de turno. Si la planta no espera, adelántala
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
            placeholder="Carlos Núñez"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            RUT (opcional)
          </span>
          <input
            name="rut"
            className="input-line mt-2"
            placeholder="76.882.441-K"
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
            placeholder="+56 9 5881 9004"
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
              Bahía de la nave
            </option>
            {families.map((family) => (
              <option key={family.id} value={family.name}>
                {family.bay} · {family.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Medida / norma
          </span>
          <input
            required
            name="medida"
            className="input-line mt-2"
            placeholder="Ø 8 mm × 3.150 mm, A-63"
          />
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Cantidad
          </span>
          <input
            required
            name="cantidad"
            className="input-line mt-2"
            placeholder="42 tiras"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Corte y doblado
          </span>
          <select name="corte" className="input-line mt-2" defaultValue="tira">
            <option value="tira">Tira de 6.000 mm, sin corte</option>
            <option value="corte">Corte a medida</option>
            <option value="doblado">Corte y doblado</option>
          </select>
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Entrega
          </span>
          <select name="entrega" className="input-line mt-2" defaultValue="retiro">
            <option value="retiro">Retiro en Quilicura</option>
            <option value="obra">Despacho a obra, madrugada</option>
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Comuna
          </span>
          <input
            required
            name="comuna"
            className="input-line mt-2"
            placeholder="Pudahuel"
          />
        </label>
      </div>

      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
          Lista o nota
        </span>
        <textarea
          name="nota"
          className="input-line mt-2"
          placeholder="Diámetros, largos, curvas. Si hay OC, el número. Si es parada de planta, la hora."
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-mute">
          Pedido mínimo de despacho {site.pedidoMinimoIva.toLocaleString("es-CL")} con
          IVA. El precio se confirma con stock de nave.
        </p>
        <button type="submit" className="btn btn-sodium w-fit">
          Enviar lista
        </button>
      </div>
    </form>
  );
}
