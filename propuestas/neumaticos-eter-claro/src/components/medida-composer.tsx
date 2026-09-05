"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Arrow } from "@/components/mark";
import {
  ASPECTS,
  DEFAULT_MEDIDA,
  RIMS,
  WIDTHS,
  matchTires,
  sizeLabel,
} from "@/data/tires";
import { formatCLP, stockLabel } from "@/lib/format";
import { cn } from "@/lib/cn";

type Value = { width: number; aspect: number; rim: number };

function cycle(list: readonly number[], current: number, dir: 1 | -1) {
  const index = list.indexOf(current);
  const next = index < 0 ? 0 : (index + dir + list.length) % list.length;
  return list[next];
}

function Step({
  label,
  unit,
  value,
  onDown,
  onUp,
}: {
  label: string;
  unit: string;
  value: number;
  onDown: () => void;
  onUp: () => void;
}) {
  return (
    <div className="flex flex-col items-center">
      <button type="button" className="stepper" onClick={onUp} aria-label={`Subir ${label}`}>
        +
      </button>
      <p className="font-display text-[clamp(3.2rem,8vw,7.2rem)] font-light leading-none tracking-tight tabular-nums">
        {value}
      </p>
      <button type="button" className="stepper" onClick={onDown} aria-label={`Bajar ${label}`}>
        −
      </button>
      <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.28em] text-muted">
        {label}
        <span className="ml-2 text-goma-soft">{unit}</span>
      </p>
    </div>
  );
}

export function MedidaComposer({
  variant = "page",
  initial,
}: {
  variant?: "band" | "page";
  initial?: Partial<Value>;
}) {
  const [value, setValue] = useState<Value>({
    width: initial?.width ?? DEFAULT_MEDIDA.width,
    aspect: initial?.aspect ?? DEFAULT_MEDIDA.aspect,
    rim: initial?.rim ?? DEFAULT_MEDIDA.rim,
  });

  const result = useMemo(
    () => matchTires(value.width, value.aspect, value.rim),
    [value],
  );

  const href = `/medida?a=${value.width}&p=${value.aspect}&r=${value.rim}`;
  const compact = variant === "band";

  return (
    <div>
      <div
        className={cn(
          "flex flex-wrap items-end justify-center gap-2 sm:gap-6",
          compact ? "py-10 md:py-14" : "py-6",
        )}
      >
        <Step
          label="Ancho"
          unit="mm"
          value={value.width}
          onUp={() => setValue((v) => ({ ...v, width: cycle(WIDTHS, v.width, 1) }))}
          onDown={() => setValue((v) => ({ ...v, width: cycle(WIDTHS, v.width, -1) }))}
        />
        <span className="mb-[3.4rem] font-display text-4xl font-light text-muted md:text-6xl">
          /
        </span>
        <Step
          label="Perfil"
          unit="%"
          value={value.aspect}
          onUp={() => setValue((v) => ({ ...v, aspect: cycle(ASPECTS, v.aspect, 1) }))}
          onDown={() => setValue((v) => ({ ...v, aspect: cycle(ASPECTS, v.aspect, -1) }))}
        />
        <span className="mb-[3.4rem] font-display text-4xl font-light text-muted md:text-6xl">
          R
        </span>
        <Step
          label="Aro"
          unit="pulgadas"
          value={value.rim}
          onUp={() => setValue((v) => ({ ...v, rim: cycle(RIMS, v.rim, 1) }))}
          onDown={() => setValue((v) => ({ ...v, rim: cycle(RIMS, v.rim, -1) }))}
        />
      </div>

      {compact ? (
        <div className="mt-2 flex flex-wrap items-center justify-center gap-6">
          <Link href={href} className="btn btn-ink">
            Ver esta medida
            <Arrow />
          </Link>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
            Está en el costado · o en la puerta del conductor
          </p>
        </div>
      ) : (
        <div className="mt-10">
          {result.exact ? (
            <p className="kicker">Stock para {sizeLabel(value)}</p>
          ) : (
            <p className="kicker">
              No hay {sizeLabel(value)} en piso · te mostramos lo más cercano y cotizamos la tuya hoy
            </p>
          )}

          <ul className="mt-8 divide-y divide-line border-y border-line">
            {result.items.map((tire) => (
              <li key={tire.slug}>
                <Link
                  href={`/compuestos/${tire.slug}`}
                  className="group grid gap-2 py-6 md:grid-cols-12 md:items-baseline"
                >
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted md:col-span-2">
                    {sizeLabel(tire)}
                  </span>
                  <span className="font-display text-2xl font-light tracking-tight md:col-span-5">
                    {tire.brand} {tire.model}
                  </span>
                  <span className="text-sm text-ink-soft md:col-span-2">{tire.load}</span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-goma md:col-span-1">
                    {stockLabel(tire.stock)}
                  </span>
                  <span className="text-right tabular-nums md:col-span-2">
                    {formatCLP(tire.priceCLP)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/cita?medida=${encodeURIComponent(sizeLabel(value))}`}
              className="btn btn-ink"
            >
              Cotizar {sizeLabel(value)}
              <Arrow />
            </Link>
            <p className="max-w-sm self-center text-sm text-muted">
              Valores referenciales. Se confirman con stock del día. Incluyen montaje, balanceo e IVA.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
