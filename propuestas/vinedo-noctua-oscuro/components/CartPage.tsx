"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { getWine } from "@/lib/wines";
import { clp } from "@/lib/format";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function CartPage() {
  const {
    lines,
    setQty,
    remove,
    subtotal,
    shipping,
    setShipping,
    shippingCost,
    total,
    clear,
  } = useCart();
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="px-6 py-32 md:px-12 lg:px-16">
        <p className="kicker">Pedido</p>
        <h1 className="mt-4 max-w-2xl font-display text-5xl font-light md:text-6xl">
          Recibimos tu pedido.
        </h1>
        <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-parchment">
          Te confirmamos cupo y despacho por correo dentro de un día hábil.
          Pago contra confirmación —transferencia o tarjeta.
        </p>
        <Link href="/vinos" className="btn mt-10">
          Volver a la carta
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="px-6 py-32 md:px-12 lg:px-16">
        <p className="kicker">Carrito</p>
        <h1 className="mt-4 font-display text-5xl font-light md:text-6xl">
          El carrito está en silencio.
        </h1>
        <Link href="/vinos" className="btn mt-10">
          Ver vinos
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-16 px-6 pb-24 pt-32 md:px-12 lg:grid-cols-12 lg:px-16 lg:pb-32 lg:pt-40">
      <div className="lg:col-span-7">
        <p className="kicker">Carrito</p>
        <h1 className="mt-3 font-display text-5xl font-light">Tu pedido</h1>
        <ul className="mt-10 divide-y divide-bone/10 border-y border-bone/10">
          {lines.map((line) => {
            const wine = getWine(line.slug);
            if (!wine) return null;
            return (
              <li key={line.slug} className="flex gap-5 py-6">
                <div className="relative h-28 w-20 shrink-0 bg-dusk">
                  <Image
                    src={wine.image}
                    alt={wine.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-2xl">{wine.name}</p>
                      <p className="kicker mt-1">
                        {wine.varietal} · {wine.vintage}
                      </p>
                    </div>
                    <p className="text-brass">{clp(wine.price * line.qty)}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center border border-bone/20">
                      <button
                        className="px-3 py-1"
                        onClick={() => setQty(line.slug, line.qty - 1)}
                      >
                        −
                      </button>
                      <span className="min-w-6 text-center font-mono text-xs">
                        {line.qty}
                      </span>
                      <button
                        className="px-3 py-1"
                        onClick={() => setQty(line.slug, line.qty + 1)}
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
      </div>

      <aside className="lg:col-span-5">
        <div className="border border-bone/10 bg-night p-8">
          <p className="kicker">Despacho</p>
          <div className="mt-6 space-y-3">
            {(
              [
                ["rm", "Región Metropolitana", site.shippingRm],
                ["regiones", "Otras regiones", site.shippingRegions],
                ["retiro", "Retiro en viñedo", 0],
              ] as const
            ).map(([id, label, price]) => (
              <label
                key={id}
                className={cn(
                  "flex cursor-pointer items-center justify-between border px-4 py-3 text-sm",
                  shipping === id ? "border-brass text-bone" : "border-bone/15 text-parchment",
                )}
              >
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="despacho"
                    className="accent-brass"
                    checked={shipping === id}
                    onChange={() => setShipping(id)}
                  />
                  {label}
                </span>
                <span className="font-mono text-xs">
                  {subtotal >= site.shippingFreeFrom && id !== "retiro"
                    ? "Gratis"
                    : price === 0
                      ? "Sin costo"
                      : clp(price)}
                </span>
              </label>
            ))}
          </div>
          <p className="mt-3 text-xs text-mist">
            Despacho gratis desde {clp(site.shippingFreeFrom)}.
          </p>

          <dl className="mt-8 space-y-3 border-t border-bone/10 pt-6 text-sm">
            <div className="flex justify-between">
              <dt className="text-mist">Subtotal</dt>
              <dd>{clp(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-mist">Despacho</dt>
              <dd>{shippingCost === 0 ? "Gratis" : clp(shippingCost)}</dd>
            </div>
            <div className="flex items-baseline justify-between pt-2">
              <dt className="kicker">Total</dt>
              <dd className="font-display text-3xl text-brass">{clp(total)}</dd>
            </div>
          </dl>

          <form
            className="mt-10 grid gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              clear();
              setSent(true);
            }}
          >
            <label>
              <span className="kicker">Nombre</span>
              <input className="field mt-2" required autoComplete="name" />
            </label>
            <label>
              <span className="kicker">Correo</span>
              <input className="field mt-2" type="email" required autoComplete="email" />
            </label>
            {shipping !== "retiro" && (
              <>
                <label>
                  <span className="kicker">Dirección</span>
                  <input className="field mt-2" required autoComplete="street-address" />
                </label>
                <label>
                  <span className="kicker">Comuna</span>
                  <input className="field mt-2" required />
                </label>
              </>
            )}
            <button className="btn mt-2" type="submit">
              Confirmar pedido
            </button>
            <p className="text-xs text-mist">
              IVA incluido. El exceso de alcohol es perjudicial para la salud.
            </p>
          </form>
        </div>
      </aside>
    </div>
  );
}
