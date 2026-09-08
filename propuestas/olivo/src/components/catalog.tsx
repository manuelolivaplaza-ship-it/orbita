"use client";

import { useEffect, useMemo, useState } from "react";

import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { filterProperties, properties, type PropertyFilters } from "@/lib/properties";
import { comunas, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const defaults: Required<PropertyFilters> = {
  operation: "todas",
  type: "todos",
  comuna: "todas",
  bedrooms: "todos",
};

function readFiltersFromLocation(): Required<PropertyFilters> {
  if (typeof window === "undefined") return defaults;
  const params = new URLSearchParams(window.location.search);
  return {
    operation: params.get("op") ?? "todas",
    type: params.get("tipo") ?? "todos",
    comuna: params.get("comuna") ?? "todas",
    bedrooms: params.get("dorms") ?? "todos",
  };
}

export function Catalog() {
  const [filters, setFilters] = useState<Required<PropertyFilters>>(defaults);

  useEffect(() => {
    setFilters(readFiltersFromLocation());
  }, []);

  function update(key: keyof Required<PropertyFilters>, param: string, value: string) {
    const next = { ...filters, [key]: value };
    setFilters(next);
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const empty = value === "todas" || value === "todos" || value === "";
    if (empty) url.searchParams.delete(param);
    else url.searchParams.set(param, value);
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }

  const list = useMemo(() => filterProperties(filters), [filters]);
  const ventas = properties.filter((p) => p.operation === "venta").length;
  const arriendos = properties.filter((p) => p.operation === "arriendo").length;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["todas", `Todas · ${properties.length}`],
            ["venta", `Comprar · ${ventas}`],
            ["arriendo", `Arrendar · ${arriendos}`],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => update("operation", "op", id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              filters.operation === id
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground ring-1 ring-border hover:text-foreground",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-2 rounded-2xl bg-card p-3 ring-1 ring-border sm:grid-cols-3">
        <Filter
          label="Tipo"
          value={filters.type ?? "todos"}
          onChange={(v) => update("type", "tipo", v)}
          options={[
            ["todos", "Casa o departamento"],
            ["casa", "Casa"],
            ["departamento", "Departamento"],
          ]}
        />
        <Filter
          label="Comuna"
          value={filters.comuna ?? "todas"}
          onChange={(v) => update("comuna", "comuna", v)}
          options={[
            ["todas", "Todas las comunas"],
            ...comunas.map((c) => [c, c] as [string, string]),
          ]}
        />
        <Filter
          label="Dormitorios"
          value={filters.bedrooms ?? "todos"}
          onChange={(v) => update("bedrooms", "dorms", v)}
          options={[
            ["todos", "Cualquiera"],
            ["1", "1 o más"],
            ["2", "2 o más"],
            ["3", "3 o más"],
            ["4", "4 o más"],
          ]}
        />
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        {list.length} {list.length === 1 ? "propiedad" : "propiedades"}
        {filters.operation === "venta"
          ? " en venta"
          : filters.operation === "arriendo"
            ? " en arriendo"
            : ""}
        {filters.comuna !== "todas" ? ` en ${filters.comuna}` : ""}.
      </p>

      {list.length === 0 ? (
        <div className="mt-8 rounded-2xl bg-card p-10 text-center ring-1 ring-border">
          <p className="font-heading text-2xl">Nada con ese filtro.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Afloja un criterio o escríbenos: hay cartera que no publicamos toda.
          </p>
          <Button asChild className="mt-6 h-11">
            <a
              href={waLink("Hola Olivo, no encontré lo que busco en la web. ¿Tienen algo parecido?")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir algo que no está
            </a>
          </Button>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      )}

      <div className="mt-12 rounded-3xl bg-primary px-6 py-8 text-primary-foreground md:px-10">
        <p className="text-xs tracking-[0.18em] text-primary-foreground/70 uppercase">
          Fuera de vitrina
        </p>
        <p className="mt-2 max-w-2xl font-heading text-3xl">
          {properties.length} publicadas. El resto, bajo consulta.
        </p>
        <p className="mt-3 max-w-xl text-sm text-primary-foreground/75">
          Hay exclusivas que el dueño no quiere en portal. Si nos dices comuna, presupuesto
          y plazo, te decimos si hay algo que calce.
        </p>
        <Button
          asChild
          variant="secondary"
          className="mt-6 h-11 bg-white text-primary hover:bg-white/90"
        >
          <a
            href={waLink("Hola Olivo, quiero ver propiedades que no están publicadas.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}

function Filter({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: [string, string][];
}) {
  return (
    <label className="grid gap-1 px-1">
      <span className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-xl border border-input bg-background px-3 text-sm"
      >
        {options.map(([v, l]) => (
          <option key={v} value={v}>
            {l}
          </option>
        ))}
      </select>
    </label>
  );
}
