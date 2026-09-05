"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import {
  lines,
  products,
  rims,
  type LineId,
  type VehicleKind,
} from "@/data/products";
import { cn } from "@/lib/cn";

const kinds: { id: VehicleKind | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "turismo", label: "Turismo" },
  { id: "suv", label: "SUV" },
  { id: "camioneta", label: "Camioneta" },
  { id: "sport", label: "Sport" },
];

export function CatalogView() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const linea = (sp.get("linea") as LineId | "todas") || "todas";
  const kind = (sp.get("vehiculo") as VehicleKind | "todos") || "todos";
  const rim = sp.get("aro") ? Number(sp.get("aro")) : 0;

  function sync(next: { linea: string; kind: string; rim: number }) {
    const params = new URLSearchParams();
    if (next.linea !== "todas") params.set("linea", next.linea);
    if (next.kind !== "todos") params.set("vehiculo", next.kind);
    if (next.rim) params.set("aro", String(next.rim));
    const q = params.toString();
    router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
  }

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        if (linea !== "todas" && p.line !== linea) return false;
        if (kind !== "todos" && p.vehicle !== kind) return false;
        if (rim && !p.sizes.some((s) => s.rim === rim)) return false;
        return true;
      }),
    [linea, kind, rim],
  );

  return (
    <div className="pad pb-24">
      <div className="flex flex-col gap-8 border-b border-line py-6 lg:flex-row lg:items-end lg:justify-between">
        <Filter
          label="Línea"
          value={linea}
          options={[
            { id: "todas", label: "Todas" },
            ...lines.map((l) => ({ id: l.id, label: l.latin })),
          ]}
          onChange={(id) => sync({ linea: id, kind, rim })}
        />
        <Filter
          label="Vehículo"
          value={kind}
          options={kinds}
          onChange={(id) => sync({ linea, kind: id, rim })}
        />
        <Filter
          label="Aro"
          value={rim ? String(rim) : "0"}
          options={[
            { id: "0", label: "Todos" },
            ...rims.map((n) => ({ id: String(n), label: `R${n}` })),
          ]}
          onChange={(id) => sync({ linea, kind, rim: Number(id) })}
        />
      </div>

      <p className="hud py-6">
        {filtered.length.toString().padStart(2, "0")} compuestos
      </p>

      {filtered.length === 0 ? (
        <p className="max-w-md py-16 text-mute">
          Nada con ese filtro. Prueba otra línea, o escríbenos: armamos la
          medida aunque no esté en vitrina.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

function Filter({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { id: string; label: string }[];
  onChange: (id: string) => void;
}) {
  return (
    <div>
      <p className="kicker mb-3">{label}</p>
      <div className="flex flex-wrap gap-1">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            className={cn(
              "px-3 py-1.5 text-sm transition-colors",
              value === o.id
                ? "bg-amber text-[#1a1408]"
                : "text-mute hover:bg-amber-dim hover:text-ink",
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
