"use client";

import { FormEvent, useMemo, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { getProduct, parseSize, products } from "@/data/products";
import { formatSize, waLink } from "@/lib/format";

export function CitaForm() {
  const sp = useSearchParams();
  const product = getProduct(sp.get("producto") ?? "");
  const medida = sp.get("medida");
  const parsed = medida ? parseSize(medida) : null;
  const medidaLabel =
    parsed && parsed.width
      ? formatSize(parsed.width, parsed.profile, parsed.rim)
      : "";

  const [sent, setSent] = useState(false);
  const [nombre, setNombre] = useState("");
  const [fono, setFono] = useState("");
  const [cuando, setCuando] = useState("nocturna");
  const [nota, setNota] = useState(
    [product?.name, medidaLabel].filter(Boolean).join(" · "),
  );

  const message = useMemo(() => {
    const bits = [
      `Hola NOCTUA, soy ${nombre || "[nombre]"}.`,
      `Teléfono: ${fono || "[fono]"}.`,
      `Horario: ${cuando}.`,
      nota ? `Detalle: ${nota}.` : "",
    ];
    return bits.filter(Boolean).join(" ");
  }, [nombre, fono, cuando, nota]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="max-w-md">
        <p className="kicker text-amber-2">Recibido</p>
        <h2 className="display mt-4 text-4xl">Te escribimos.</h2>
        <p className="mt-4 leading-relaxed text-mute">
          {nombre}, anotamos la solicitud. Si quieres adelantar, mándala ahora
          por WhatsApp: llega directo al taller.
        </p>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-solid mt-8"
        >
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md space-y-8">
      <Field label="Nombre">
        <input
          required
          name="nombre"
          autoComplete="name"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border-b border-line py-2"
        />
      </Field>
      <Field label="Teléfono">
        <input
          required
          name="telefono"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+56 9"
          value={fono}
          onChange={(e) => setFono(e.target.value)}
          className="w-full border-b border-line py-2"
        />
      </Field>
      <Field label="Horario">
        <div className="flex gap-2">
          {[
            { id: "diurna", label: "Diurna" },
            { id: "nocturna", label: "Nocturna" },
          ].map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setCuando(o.id)}
              className={
                cuando === o.id
                  ? "bg-amber px-4 py-2 text-sm text-[#1a1408]"
                  : "border border-line px-4 py-2 text-sm text-mute"
              }
            >
              {o.label}
            </button>
          ))}
        </div>
      </Field>
      <Field label="Compuesto / medida">
        <input
          name="detalle"
          list="productos"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          placeholder="Vía 55 · 205/55 R16"
          className="w-full border-b border-line py-2"
        />
        <datalist id="productos">
          {products.map((p) => (
            <option key={p.slug} value={p.name} />
          ))}
        </datalist>
      </Field>
      <Field label="Nota">
        <textarea
          name="nota"
          rows={3}
          placeholder="Patente, auto, si vienes con las cuatro ruedas…"
          className="w-full border-b border-line py-2"
        />
      </Field>
      <button type="submit" className="btn btn-solid w-full">
        Pedir hora
      </button>
      <p className="text-xs leading-relaxed text-faint">
        Al enviar no se cobra nada. Confirmamos disponibilidad por WhatsApp.
        Cita nocturna: jueves a sábado, 21:00 a 01:00.
      </p>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="kicker">{label}</span>
      <div className="mt-3">{children}</div>
    </label>
  );
}
