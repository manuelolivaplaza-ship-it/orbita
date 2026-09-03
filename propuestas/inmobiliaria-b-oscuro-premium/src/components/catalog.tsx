"use client";

import { useMemo, useState } from "react";
import {
  getAvailable,
  typeLabels,
  type PropertyType,
} from "@/data/properties";
import { territories, type TerritoryId } from "@/data/site";
import { cn } from "@/lib/cn";
import { PropertyCard } from "./property-card";

const types: { id: PropertyType | "todas"; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "casa", label: typeLabels.casa },
  { id: "departamento", label: typeLabels.departamento },
  { id: "parcela", label: typeLabels.parcela },
  { id: "refugio", label: typeLabels.refugio },
];

export function Catalog() {
  const [territory, setTerritory] = useState<TerritoryId | "todas">("todas");
  const [type, setType] = useState<PropertyType | "todas">("todas");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return getAvailable().filter((p) => {
      if (territory !== "todas" && p.territory !== territory) return false;
      if (type !== "todas" && p.type !== type) return false;
      if (q.trim()) {
        const hay = `${p.name} ${p.comuna} ${p.excerpt}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [territory, type, q]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-y border-[var(--line)] py-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className={cn("chip", territory === "todas" && "is-on")}
            onClick={() => setTerritory("todas")}
          >
            Todos los territorios
          </button>
          {territories.map((t) => (
            <button
              key={t.id}
              type="button"
              className={cn("chip", territory === t.id && "is-on")}
              onClick={() => setTerritory(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              key={t.id}
              type="button"
              className={cn("chip", type === t.id && "is-on")}
              onClick={() => setType(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-end justify-between gap-6">
        <label className="block max-w-md flex-1">
          <span className="kicker">Buscar</span>
          <input
            className="field mt-2"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Casa, comuna, lago…"
          />
        </label>
        <p className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          {String(list.length).padStart(2, "0")} residencias
        </p>
      </div>

      {list.length === 0 ? (
        <p className="mt-16 max-w-lg font-display text-3xl italic text-ivory-soft">
          No hay residencias con ese filtro. El inventario es breve a propósito —
          escríbenos y abrimos el archivo privado.
        </p>
      ) : (
        <div className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <PropertyCard key={p.slug} property={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
