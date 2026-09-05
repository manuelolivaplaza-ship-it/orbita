"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { formatCLP, pad } from "@/lib/format";
import {
  categories,
  type CategoryId,
  type Product,
} from "@/lib/products";

type Filter = CategoryId | "todas";

const filters: { id: Filter; label: string; note: string }[] = [
  { id: "todas", label: "Todas", note: "La casa completa" },
  ...categories.map((c) => ({ id: c.id, label: c.label, note: c.note })),
];

function isFilter(value: string | null): value is Filter {
  if (!value) return false;
  return value === "todas" || categories.some((c) => c.id === value);
}

export function Catalog({ products }: { products: Product[] }) {
  const params = useSearchParams();
  const fromUrl = params.get("linea");
  const [filter, setFilter] = useState<Filter>(
    isFilter(fromUrl) ? fromUrl : "todas",
  );
  const [hover, setHover] = useState<string | null>(null);

  const list = useMemo(() => {
    if (filter === "todas") return products;
    return products.filter((p) => p.category === filter);
  }, [filter, products]);

  const active = list.find((p) => p.slug === hover) ?? list[0];

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-linea pb-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setFilter(item.id);
                setHover(null);
              }}
              className={cn(
                "px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.24em] transition-colors duration-300",
                filter === item.id
                  ? "bg-tinta text-papel"
                  : "text-gris hover:text-tinta",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
          {pad(list.length)} {list.length === 1 ? "pieza" : "piezas"}
        </p>
      </div>

      {list.length === 0 ? (
        <p className="py-24 font-display text-3xl tracking-tight text-tinta-suave">
          No hay piezas en esta mesa, por ahora.
        </p>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <ol className="lg:col-span-6">
            {list.map((p, i) => (
              <li key={p.slug} className="border-b border-linea">
                <Link
                  href={`/coleccion/${p.slug}`}
                  onMouseEnter={() => setHover(p.slug)}
                  onFocus={() => setHover(p.slug)}
                  className={cn(
                    "grid grid-cols-[2rem_3.25rem_1fr_auto] items-center gap-3 py-4 transition-colors lg:grid-cols-[2.5rem_1fr_auto] lg:items-baseline lg:gap-4 lg:py-5",
                    active?.slug === p.slug ? "text-tinta" : "text-tinta-suave",
                  )}
                >
                  <span className="font-mono nums text-[0.68rem] tracking-[0.18em] text-bronce">
                    {pad(i + 1)}
                  </span>
                  <span className="relative aspect-square overflow-hidden bg-papel-2 lg:hidden">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="52px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="font-display block text-2xl tracking-tight md:text-3xl">
                      {p.name}
                    </span>
                    <span className="mt-1 block font-mono text-[0.58rem] uppercase tracking-[0.2em] text-gris">
                      {p.origin}
                    </span>
                  </span>
                  <span className="font-mono nums text-sm">
                    {formatCLP(p.sizes?.[0]?.price ?? p.price)}
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="hidden lg:col-span-6 lg:block">
            {active ? (
              <div className="sticky top-28">
                <Link
                  href={`/coleccion/${active.slug}`}
                  className="img-zoom relative block aspect-[4/5] overflow-hidden bg-papel-2"
                >
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </Link>
                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="kicker">{active.kicker}</p>
                    <p className="font-display mt-2 text-3xl tracking-tight">
                      {active.name}
                    </p>
                  </div>
                  <p className="font-mono nums text-sm">
                    {formatCLP(active.sizes?.[0]?.price ?? active.price)}
                  </p>
                </div>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-tinta-suave">
                  {active.excerpt}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
