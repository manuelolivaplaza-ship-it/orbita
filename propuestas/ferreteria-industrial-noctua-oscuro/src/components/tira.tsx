"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { site } from "@/data/site";
import { formatCLP, formatMm } from "@/lib/format";
import {
  KERF_MM,
  TIRA_MM,
  nestCuts,
  parseMm,
  type Cut,
} from "@/lib/nest";
import { cn } from "@/lib/cn";

const PRESETS = [
  { name: "Pilar", lengthMm: 3150 },
  { name: "Viga", lengthMm: 2450 },
  { name: "Losa", lengthMm: 1800 },
  { name: "Estribo", lengthMm: 890 },
] as const;

const TONES = ["#2a2e31", "#34312c", "#3b4144", "#2f3330"];

function newId() {
  return Math.random().toString(36).slice(2, 8);
}

export function Tira({ compact = false }: { compact?: boolean }) {
  const inputId = useId();
  const [raw, setRaw] = useState("3150");
  const [qty, setQty] = useState(2);
  const [cuts, setCuts] = useState<Cut[]>([
    { id: "a", lengthMm: 3150, qty: 2 },
    { id: "b", lengthMm: 1800, qty: 1 },
  ]);
  const [error, setError] = useState("");

  const result = useMemo(() => nestCuts(cuts), [cuts]);

  function addCut(lengthMm: number, amount = qty) {
    if (!Number.isFinite(lengthMm) || lengthMm < 50) {
      setError("La medida mínima es 50 mm.");
      return;
    }
    if (lengthMm > TIRA_MM) {
      setError("No cabe en la tira de 6.000 mm.");
      return;
    }
    setError("");
    setCuts((current) => {
      const existing = current.find((cut) => cut.lengthMm === lengthMm);
      if (existing) {
        return current.map((cut) =>
          cut.id === existing.id ? { ...cut, qty: cut.qty + amount } : cut,
        );
      }
      return [...current, { id: newId(), lengthMm, qty: amount }];
    });
  }

  function onAdd() {
    const lengthMm = parseMm(raw);
    if (!Number.isFinite(lengthMm)) {
      setError("Escribe milímetros o metros: 3150 o 3,15.");
      return;
    }
    addCut(lengthMm, qty);
  }

  function bump(id: string, dir: 1 | -1) {
    setCuts((current) =>
      current
        .map((cut) =>
          cut.id === id ? { ...cut, qty: cut.qty + dir } : cut,
        )
        .filter((cut) => cut.qty > 0),
    );
  }

  const whatsapp = useMemo(() => {
    const lines = [
      "Hola NOCTUA, lista de corte:",
      ...cuts.map((cut) => `${cut.qty} × ${formatMm(cut.lengthMm)}`),
      result.bars.length
        ? `${result.bars.length} tira(s) · merma ${formatMm(result.remnantTotal)} · cortes ${result.extraCuts}`
        : "",
    ].filter(Boolean);
    return `https://wa.me/56958819004?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [cuts, result]);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
            Tira de {formatMm(TIRA_MM)} · kerf {KERF_MM} mm
          </p>
          {!compact ? (
            <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,4.6rem)] font-medium leading-[0.9] tracking-wide">
              Anida el corte.
            </h2>
          ) : null}
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-mute">
          La sierra come {KERF_MM} mm entre piezas. Lo que no cabe en una tira
          abre la siguiente.
        </p>
      </div>

      <div className="mt-10" aria-hidden="true">
        <div className="mb-2 flex justify-between font-mono text-[0.52rem] uppercase tracking-[0.18em] text-mute">
          <span>0</span>
          <span>1.000</span>
          <span>2.000</span>
          <span>3.000</span>
          <span>4.000</span>
          <span>5.000</span>
          <span>6.000</span>
        </div>
        <div className="rule rule-sodium mb-3" />
        {result.bars.length === 0 ? (
          <div className="tira-track">
            <div className="tira-remnant h-full w-full" />
          </div>
        ) : (
          <div className="grid gap-2">
            {result.bars.map((bar, index) => (
              <div key={index} className="tira-track flex">
                {bar.pieces.map((piece, pieceIndex) => (
                  <div
                    key={`${piece}-${pieceIndex}`}
                    className="tira-piece"
                    style={{
                      width: `${(piece / TIRA_MM) * 100}%`,
                      background: TONES[pieceIndex % TONES.length],
                    }}
                    title={formatMm(piece)}
                  >
                    {piece >= 700 ? formatMm(piece) : ""}
                  </div>
                ))}
                {bar.remnant > 0 ? (
                  <div
                    className="tira-remnant"
                    style={{ width: `${(bar.remnant / TIRA_MM) * 100}%` }}
                    title={`Merma ${formatMm(bar.remnant)}`}
                  />
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <form
          className="lg:col-span-5"
          onSubmit={(event) => {
            event.preventDefault();
            onAdd();
          }}
        >
          <label htmlFor={inputId} className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
            Largo
          </label>
          <div className="mt-2 flex items-end gap-3">
            <input
              id={inputId}
              value={raw}
              onChange={(event) => setRaw(event.target.value)}
              className="input-line font-display text-4xl tracking-wide"
              inputMode="decimal"
              placeholder="3150"
              aria-describedby={error ? `${inputId}-error` : undefined}
            />
            <span className="pb-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
              mm
            </span>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
              Cantidad
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="btn btn-ghost min-h-9 px-3"
                onClick={() => setQty((value) => Math.max(1, value - 1))}
                aria-label="Bajar cantidad"
              >
                −
              </button>
              <span className="font-display text-3xl tabular-nums">{qty}</span>
              <button
                type="button"
                className="btn btn-ghost min-h-9 px-3"
                onClick={() => setQty((value) => value + 1)}
                aria-label="Subir cantidad"
              >
                +
              </button>
            </div>
          </div>
          {error ? (
            <p id={`${inputId}-error`} className="mt-3 text-sm text-oxide">
              {error}
            </p>
          ) : (
            <p className="mt-3 text-xs text-mute">
              Acepta 3150, 3.150 o 3,15 m.
            </p>
          )}
          <button type="submit" className="btn btn-sodium mt-6">
            Sumar a la tira
          </button>
          <div className="mt-6 flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset.name}
                type="button"
                onClick={() => addCut(preset.lengthMm, 1)}
                className="border border-line px-3 py-2 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-mute transition-colors hover:border-sodium hover:text-face"
              >
                {preset.name} {formatMm(preset.lengthMm)}
              </button>
            ))}
          </div>
        </form>

        <div className="lg:col-span-7">
          <ul className="border-t border-line">
            {cuts.length === 0 ? (
              <li className="py-6 text-sm text-mute">
                La tira está vacía. Suma un largo.
              </li>
            ) : (
              cuts.map((cut) => (
                <li
                  key={cut.id}
                  className="grid grid-cols-[1fr_auto_auto] items-baseline gap-4 border-b border-line py-3"
                >
                  <span className="font-display text-2xl tracking-wide">
                    {formatMm(cut.lengthMm)}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-sm">
                    <button
                      type="button"
                      onClick={() => bump(cut.id, -1)}
                      aria-label={`Quitar un corte de ${formatMm(cut.lengthMm)}`}
                      className="text-mute"
                    >
                      −
                    </button>
                    × {cut.qty}
                    <button
                      type="button"
                      onClick={() => bump(cut.id, 1)}
                      aria-label={`Sumar un corte de ${formatMm(cut.lengthMm)}`}
                      className="text-mute"
                    >
                      +
                    </button>
                  </span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mute">
                    {formatMm(cut.lengthMm * cut.qty)}
                  </span>
                </li>
              ))
            )}
          </ul>

          <dl
            className={cn(
              "mt-8 grid gap-6 sm:grid-cols-3",
              result.bars.length === 0 && "opacity-40",
            )}
          >
            <div>
              <dt className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-mute">
                Tiras
              </dt>
              <dd className="mt-2 font-display text-4xl tracking-wide">
                {result.bars.length}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-mute">
                Merma
              </dt>
              <dd className="mt-2 font-display text-4xl tracking-wide">
                {formatMm(result.remnantTotal)}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-mute">
                Corte
              </dt>
              <dd className="mt-2 font-display text-4xl tracking-wide">
                {formatCLP(result.corteIva)}
              </dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-mute">
            Corte {formatCLP(site.corteExtra)} c/u. Aprovecho{" "}
            {result.utilization.toFixed(1)}%. El fierro se cotiza aparte.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsapp} className="btn btn-sodium">
              Mandar lista
              <Arrow />
            </a>
            <Link href="/cotizar" className="btn btn-ghost">
              Cotizar con RUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
