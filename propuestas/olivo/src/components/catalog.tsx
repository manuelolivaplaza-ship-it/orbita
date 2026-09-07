"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { PropertyCard } from "@/components/property-card";
import { filterProperties, properties } from "@/lib/properties";
import { comunas } from "@/lib/site";

export function Catalog() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filters = {
    operation: params.get("op") ?? "todas",
    type: params.get("tipo") ?? "todos",
    comuna: params.get("comuna") ?? "todas",
    bedrooms: params.get("dorms") ?? "todos",
  };

  const list = filterProperties(filters);

  function update(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    const empty =
      value === "todas" || value === "todos" || value === "";
    if (empty) next.delete(key);
    else next.set(key, value);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  return (
    <div>
      <div className="grid gap-2 rounded-2xl bg-card p-3 ring-1 ring-border sm:grid-cols-2 lg:grid-cols-4">
        <Filter
          label="Operación"
          value={filters.operation}
          onChange={(v) => update("op", v)}
          options={[
            ["todas", "Comprar o arrendar"],
            ["venta", "Comprar"],
            ["arriendo", "Arrendar"],
          ]}
        />
        <Filter
          label="Tipo"
          value={filters.type}
          onChange={(v) => update("tipo", v)}
          options={[
            ["todos", "Casa o departamento"],
            ["casa", "Casa"],
            ["departamento", "Departamento"],
          ]}
        />
        <Filter
          label="Comuna"
          value={filters.comuna}
          onChange={(v) => update("comuna", v)}
          options={[
            ["todas", "Todas las comunas"],
            ...comunas.map((c) => [c, c] as [string, string]),
          ]}
        />
        <Filter
          label="Dormitorios"
          value={filters.bedrooms}
          onChange={(v) => update("dorms", v)}
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
            Afloja un criterio o escríbenos: tenemos cartera que no publicamos toda.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      )}

      <p className="mt-10 text-center text-sm text-muted-foreground">
        {properties.length} propiedades en vitrina · el resto, bajo consulta.
      </p>
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
