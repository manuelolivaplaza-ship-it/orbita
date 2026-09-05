"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Arrow } from "@/components/mark";
import { categorias, examenes, type Categoria } from "@/data/examenes";
import { clp } from "@/lib/format";
import { cn } from "@/lib/cn";

export function Catalog() {
  const searchParams = useSearchParams();
  const fromQuery = searchParams.get("cat");
  const initial =
    fromQuery && categorias.includes(fromQuery as Categoria)
      ? (fromQuery as Categoria)
      : "Todas";
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Categoria | "Todas">(initial);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return examenes.filter((item) => {
      const matchCat = cat === "Todas" || item.categoria === cat;
      const matchQ =
        !q ||
        item.nombre.toLowerCase().includes(q) ||
        item.codigo.toLowerCase().includes(q) ||
        item.resumen.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [cat, query]);

  return (
    <div>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <label className="block max-w-md flex-1">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            Buscar
          </span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="input-line mt-2"
            placeholder="Hemograma, TSH, vitamina D…"
            type="search"
          />
        </label>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
          {list.length} en el catálogo
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {(["Todas", ...categorias] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCat(item)}
            className={cn(
              "border px-3 py-2 font-mono text-[0.58rem] uppercase tracking-[0.2em] transition-colors",
              cat === item
                ? "border-amber bg-amber text-void"
                : "border-line text-muted hover:border-paper hover:text-paper",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <ul className="mt-10 divide-y divide-line border-y border-line">
        {list.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/examenes/${item.slug}`}
              className="group grid grid-cols-12 items-baseline gap-3 py-6"
            >
              <span className="col-span-12 font-display text-2xl font-semibold tracking-tight md:col-span-6 md:text-3xl">
                {item.nombre}
              </span>
              <span className="col-span-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted md:col-span-2">
                {item.categoria}
              </span>
              <span className="col-span-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted md:col-span-2">
                {item.plazo}
              </span>
              <span className="col-span-4 flex items-center justify-end gap-3 font-mono text-sm nums md:col-span-2">
                {clp(item.precio)}
                <Arrow className="opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
