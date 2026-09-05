"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { getWine } from "@/lib/wines";
import { clp } from "@/lib/format";

export function CartDrawer() {
  const { open, setOpen, lines, setQty, remove, subtotal, count } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        className="absolute inset-0 bg-ink/70"
        aria-label="Cerrar carrito"
        onClick={() => setOpen(false)}
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-bone/10 bg-night">
        <div className="flex items-center justify-between border-b border-bone/10 px-6 py-5">
          <p className="font-display text-2xl tracking-wide">
            Carrito
            <span className="ml-3 font-mono text-sm text-brass">
              {String(count).padStart(2, "0")}
            </span>
          </p>
          <button
            className="kicker hover:text-bone"
            onClick={() => setOpen(false)}
          >
            Cerrar
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <p className="font-display text-xl italic text-parchment">
              El carrito está en silencio.
            </p>
          ) : (
            <ul className="space-y-6">
              {lines.map((line) => {
                const wine = getWine(line.slug);
                if (!wine) return null;
                return (
                  <li key={line.slug} className="flex gap-4">
                    <div className="relative h-24 w-16 shrink-0 bg-dusk">
                      <Image
                        src={wine.image}
                        alt={wine.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-xl">{wine.name}</p>
                      <p className="kicker mt-1">
                        {wine.varietal} · {wine.vintage}
                      </p>
                      <p className="mt-2 text-sm text-brass">{clp(wine.price)}</p>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="flex items-center border border-bone/15">
                          <button
                            className="px-2 py-1 text-sm"
                            onClick={() => setQty(line.slug, line.qty - 1)}
                            aria-label="Quitar una"
                          >
                            −
                          </button>
                          <span className="min-w-6 text-center font-mono text-xs">
                            {line.qty}
                          </span>
                          <button
                            className="px-2 py-1 text-sm"
                            onClick={() => setQty(line.slug, line.qty + 1)}
                            aria-label="Agregar una"
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="text-[11px] uppercase tracking-[0.18em] text-mist hover:text-bone"
                          onClick={() => remove(line.slug)}
                        >
                          Quitar
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-bone/10 px-6 py-6">
          <div className="flex items-baseline justify-between">
            <span className="kicker">Subtotal</span>
            <span className="font-display text-2xl">{clp(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs text-mist">
            Despacho se calcula en el pedido. IVA incluido.
          </p>
          <Link
            href="/carrito"
            className="btn mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            Ver pedido
          </Link>
        </div>
      </aside>
    </div>
  );
}
