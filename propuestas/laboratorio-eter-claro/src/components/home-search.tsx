"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { examenes } from "@/data/examenes";
import { clp } from "@/lib/format";

export function HomeSearch() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return examenes
      .filter((item) =>
        [item.nombre, item.codigo, item.categoria].join(" ").toLowerCase().includes(q),
      )
      .slice(0, 6);
  }, [query]);

  return (
    <div className="relative">
      <label>
        <span className="field-label">¿Qué examen buscas?</span>
        <input
          className="input text-xl"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Escribe TSH, hemograma, vitamina D…"
        />
      </label>
      {results.length > 0 ? (
        <ul className="absolute z-20 mt-2 w-full border border-line bg-cream shadow-[0_24px_60px_-32px_rgba(27,29,26,0.45)]">
          {results.map((item) => (
            <li key={item.slug} className="border-b border-line last:border-0">
              <Link
                href={`/examenes/${item.slug}`}
                className="flex items-baseline justify-between gap-4 px-4 py-3 text-ink no-underline hover:bg-paper"
              >
                <span className="font-serif text-xl">{item.nombre}</span>
                <span className="font-mono text-xs text-mute">{clp(item.precio)}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
