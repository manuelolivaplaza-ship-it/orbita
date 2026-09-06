"use client";

import { useMemo, useState, type ReactNode } from "react";
import { PropertyRow } from "@/components/property-card";
import {
  comunas,
  orientacionLabel,
  properties,
  type Orientacion,
  type PropertyType,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const tipos: { id: "todas" | PropertyType; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "departamento", label: "Departamentos" },
  { id: "casa", label: "Casas" },
];

const rumbos: { id: "todas" | Orientacion; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "N", label: orientacionLabel.N },
  { id: "NE", label: orientacionLabel.NE },
  { id: "NO", label: orientacionLabel.NO },
  { id: "cruzada", label: orientacionLabel.cruzada },
];

export function CatalogFilters() {
  const [tipo, setTipo] = useState<(typeof tipos)[number]["id"]>("todas");
  const [comuna, setComuna] = useState("todas");
  const [rumbo, setRumbo] = useState<(typeof rumbos)[number]["id"]>("todas");

  const filtered = useMemo(
    () =>
      properties.filter((item) => {
        if (tipo !== "todas" && item.type !== tipo) return false;
        if (comuna !== "todas" && item.comuna !== comuna) return false;
        if (rumbo !== "todas" && item.orientacion !== rumbo) return false;
        return true;
      }),
    [tipo, comuna, rumbo]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-6 border-y border-line py-5">
        <FilterGroup label="Tipo">
          {tipos.map((item) => (
            <Chip
              key={item.id}
              active={tipo === item.id}
              onClick={() => setTipo(item.id)}
            >
              {item.label}
            </Chip>
          ))}
        </FilterGroup>
        <FilterGroup label="Comuna">
          <Chip active={comuna === "todas"} onClick={() => setComuna("todas")}>
            Todas
          </Chip>
          {comunas.map((item) => (
            <Chip
              key={item}
              active={comuna === item}
              onClick={() => setComuna(item)}
            >
              {item}
            </Chip>
          ))}
        </FilterGroup>
        <FilterGroup label="Orientación">
          {rumbos.map((item) => (
            <Chip
              key={item.id}
              active={rumbo === item.id}
              onClick={() => setRumbo(item.id)}
            >
              {item.label}
            </Chip>
          ))}
        </FilterGroup>
      </div>

      <p className="font-mono mt-8 text-[12px] tracking-[0.14em] text-muted uppercase">
        {filtered.length} {filtered.length === 1 ? "planta" : "plantas"}
      </p>

      <div className="mt-2">
        {filtered.map((item) => (
          <PropertyRow key={item.slug} property={item} />
        ))}
        {filtered.length === 0 ? (
          <p className="py-16 text-muted">
            No hay plantas con ese filtro. Afloje una condición — o escríbanos
            el encargo.
          </p>
        ) : null}
      </div>
    </div>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="kicker mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "font-mono px-3 py-1.5 text-[11px] tracking-[0.12em] uppercase transition-colors",
        active
          ? "bg-ink text-luz"
          : "border border-line text-ink/70 hover:border-ink hover:text-ink"
      )}
    >
      {children}
    </button>
  );
}
