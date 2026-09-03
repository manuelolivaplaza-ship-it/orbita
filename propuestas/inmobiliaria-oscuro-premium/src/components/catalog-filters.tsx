"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  properties,
  type ListingStatus,
  type PropertyType,
  type TerritoryId,
} from "@/lib/properties";
import { PropertyCard } from "@/components/property-card";
import { cn } from "@/lib/utils";

const tipos: { id: "" | PropertyType; label: string }[] = [
  { id: "", label: "Todos" },
  { id: "casa", label: "Casa" },
  { id: "departamento", label: "Departamento" },
  { id: "fundo", label: "Fundo" },
];

const territorios: { id: "" | TerritoryId; label: string }[] = [
  { id: "", label: "Todos" },
  { id: "santiago", label: "Santiago" },
  { id: "costa", label: "Costa" },
  { id: "lagos", label: "Lagos" },
  { id: "valle", label: "Valle" },
];

const estados: { id: "" | ListingStatus; label: string }[] = [
  { id: "", label: "Todos" },
  { id: "mesa", label: "En mesa" },
  { id: "presentacion", label: "Por presentación" },
];

export function CatalogFilters() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const tipo = (params.get("tipo") ?? "") as "" | PropertyType;
  const territorio = (params.get("territorio") ?? "") as "" | TerritoryId;
  const estado = (params.get("estado") ?? "") as "" | ListingStatus;

  function set(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (!value) next.delete(key);
    else next.set(key, value);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  const list = useMemo(() => {
    return properties.filter((p) => {
      if (tipo && p.type !== tipo) return false;
      if (territorio && p.territory !== territorio) return false;
      if (estado && p.status !== estado) return false;
      return true;
    });
  }, [tipo, territorio, estado]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line py-8">
        <FilterRow
          label="Tipo"
          options={tipos}
          value={tipo}
          onChange={(v) => set("tipo", v)}
        />
        <FilterRow
          label="Territorio"
          options={territorios}
          value={territorio}
          onChange={(v) => set("territorio", v)}
        />
        <FilterRow
          label="Estado"
          options={estados}
          value={estado}
          onChange={(v) => set("estado", v)}
        />
      </div>

      <p className="mt-8 font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
        {list.length} {list.length === 1 ? "propiedad" : "propiedades"}
      </p>

      {list.length === 0 ? (
        <p className="mt-8 max-w-[40ch] text-paper-dim">
          No hay nada en mesa con ese filtro. Afloje un criterio o pida una
          presentación: el inventario que no se publica no cabe aquí.
        </p>
      ) : (
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <li key={p.slug}>
              <PropertyCard property={p} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-3 w-24 font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase">
        {label}
      </span>
      {options.map((o) => (
        <button
          key={o.id || "all"}
          type="button"
          className={cn("chip")}
          data-active={value === o.id}
          onClick={() => onChange(o.id)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
