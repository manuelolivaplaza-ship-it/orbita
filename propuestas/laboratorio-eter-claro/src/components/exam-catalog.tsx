"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categorias, examenes, type Categoria } from "@/data/examenes";
import { clp } from "@/lib/format";

export function ExamCatalog() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState<Categoria | "Todas">("Todas");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return examenes.filter((item) => {
      const matchCat = categoria === "Todas" || item.categoria === categoria;
      const matchQ =
        !q ||
        [item.nombre, item.codigo, item.categoria, item.resumen]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return matchCat && matchQ;
    });
  }, [query, categoria]);

  return (
    <div>
      <div className="wrap flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between">
        <label className="block w-full max-w-md">
          <span className="field-label">Buscar</span>
          <input
            className="input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="TSH, vitamina D, hemograma…"
          />
        </label>
        <p className="eyebrow">
          {filtered.length} examen{filtered.length === 1 ? "" : "es"}
        </p>
      </div>

      <div className="wrap flex gap-2 overflow-x-auto pb-10">
        {(["Todas", ...categorias] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategoria(item)}
            className={`shrink-0 rounded-full px-4 py-2 text-[0.72rem] tracking-[0.12em] uppercase ${
              categoria === item
                ? "bg-ink text-cream"
                : "border border-line text-mute hover:text-ink"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="wrap border border-line bg-cream px-6 py-16 text-center">
          <p className="display text-4xl">No encontramos ese examen.</p>
          <p className="mx-auto mt-4 max-w-md text-ink-soft">
            Escríbenos por WhatsApp con la orden. Si está en el nomenclador,
            lo tomamos igual.
          </p>
        </div>
      ) : (
        <ul className="wrap divide-y divide-line border-y border-line">
          {filtered.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/examenes/${item.slug}`}
                className="group grid grid-cols-12 items-baseline gap-3 py-5 text-ink no-underline md:py-6"
              >
                <span className="col-span-12 font-serif text-2xl leading-tight md:col-span-6 md:text-[1.85rem]">
                  {item.nombre}
                </span>
                <span className="col-span-6 hidden text-sm text-mute md:col-span-2 md:block">
                  {item.categoria}
                </span>
                <span className="col-span-4 font-mono text-xs tracking-wider text-mute md:col-span-2">
                  {item.plazo}
                </span>
                <span className="col-span-8 text-right font-mono text-sm md:col-span-2">
                  {clp(item.precio)}
                  <span className="ml-3 text-mute transition-colors group-hover:text-ink">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
