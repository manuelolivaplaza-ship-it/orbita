"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { profiles, products, rims, sizeKey, widths } from "@/data/products";
import { vehicles } from "@/data/vehicles";
import { clp, formatSize } from "@/lib/format";
import { cn } from "@/lib/cn";

type Props = {
  initial?: { width: number; profile: number; rim: number };
  compact?: boolean;
};

export function SizeDrum({ initial, compact }: Props) {
  const [width, setWidth] = useState(initial?.width ?? 205);
  const [profile, setProfile] = useState(initial?.profile ?? 55);
  const [rim, setRim] = useState(initial?.rim ?? 16);
  const [vehicleId, setVehicleId] = useState("");

  const matches = useMemo(
    () =>
      products
        .map((p) => {
          const size = p.sizes.find(
            (s) => s.width === width && s.profile === profile && s.rim === rim,
          );
          return size ? { product: p, size } : null;
        })
        .filter(Boolean) as Array<{
        product: (typeof products)[number];
        size: (typeof products)[number]["sizes"][number];
      }>,
    [width, profile, rim],
  );

  function applyVehicle(id: string) {
    setVehicleId(id);
    const v = vehicles.find((x) => x.id === id);
    if (!v) return;
    setWidth(v.width);
    setProfile(v.profile);
    setRim(v.rim);
  }

  return (
    <div className={cn("border border-line bg-bg-2/50", compact && "bg-transparent")}>
      <div className="grid gap-0 md:grid-cols-3">
        <Drum label="Ancho" unit="mm" value={width} options={widths} onChange={setWidth} />
        <Drum label="Perfil" unit="%" value={profile} options={profiles} onChange={setProfile} />
        <Drum label="Aro" unit="″" value={rim} options={rims} onChange={setRim} prefix="R" />
      </div>

      <div className="flex flex-col gap-4 border-t border-line p-5 sm:flex-row sm:items-end sm:justify-between">
        <label className="block min-w-0 flex-1">
          <span className="kicker">O elige un auto chileno</span>
          <select
            value={vehicleId}
            onChange={(e) => applyVehicle(e.target.value)}
            className="mt-3 w-full border-b border-line pb-2 text-ink"
          >
            <option value="">—</option>
            {vehicles.map((v) => (
              <option key={v.id} value={v.id} className="bg-bg text-ink">
                {v.brand} {v.model} · {formatSize(v.width, v.profile, v.rim)}
              </option>
            ))}
          </select>
        </label>
        <p className="font-display text-3xl tracking-tight">
          {formatSize(width, profile, rim)}
        </p>
      </div>

      <div className="border-t border-line">
        {matches.length === 0 ? (
          <p className="p-6 text-sm leading-relaxed text-mute">
            No hay stock publicado en {formatSize(width, profile, rim)}. Escríbenos:
            casi siempre llega en 48 horas, o te armamos un equivalente.
          </p>
        ) : (
          <ul>
            {matches.map(({ product, size }) => (
              <li
                key={product.slug}
                className="flex flex-col gap-3 border-t border-line-2 px-5 py-4 first:border-t-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-display text-lg tracking-tight">{product.name}</p>
                  <p className="mt-1 text-sm text-mute">{product.tagline}</p>
                </div>
                <div className="flex items-center gap-6">
                  <p className="num text-amber-2">{clp.format(size.price)}</p>
                  <Link
                    href={`/catalogo/${product.slug}?medida=${sizeKey(size)}`}
                    className="btn btn-line h-10"
                  >
                    Ver
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Drum({
  label,
  unit,
  value,
  options,
  onChange,
  prefix,
}: {
  label: string;
  unit: string;
  value: number;
  options: number[];
  onChange: (n: number) => void;
  prefix?: string;
}) {
  return (
    <div className="border-line px-4 py-5 md:border-r md:last:border-r-0">
      <div className="mb-4 flex items-baseline justify-between">
        <span className="kicker">{label}</span>
        <span className="hud">{unit}</span>
      </div>
      <div
        role="listbox"
        aria-label={label}
        className="flex gap-1 overflow-x-auto pb-1 md:flex-col md:max-h-64 md:overflow-y-auto"
      >
        {options.map((n) => {
          const active = n === value;
          return (
            <button
              key={n}
              type="button"
              role="option"
              aria-selected={active}
              onClick={() => onChange(n)}
              className={cn(
                "num min-w-[3.4rem] px-3 py-2 text-left text-lg tracking-tight transition-colors",
                active
                  ? "bg-amber text-[#1a1408]"
                  : "text-mute hover:bg-amber-dim hover:text-ink",
              )}
            >
              {prefix}
              {n}
            </button>
          );
        })}
      </div>
    </div>
  );
}
