"use client";

import Image from "next/image";
import Link from "next/link";
import { IconMinus, IconPlus } from "@/components/icons";
import { linePrice, useCart } from "@/lib/cart";
import { formatCLP } from "@/lib/format";
import { getProduct } from "@/lib/products";
import { site } from "@/lib/site";

export function CartPage() {
  const { lines, subtotal, setQty, remove } = useCart();
  const remaining = Math.max(0, site.freeShippingFrom - subtotal);

  return (
    <section className="shell pt-28 pb-24 lg:pt-36 lg:pb-32">
      <p className="kicker">Carrito</p>
      <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.92] tracking-tight">
        Lo que va a la mesa.
      </h1>

      {lines.length === 0 ? (
        <div className="mt-16 max-w-lg">
          <p className="text-lg text-tinta-suave">
            Todavía no hay piezas. El índice está abierto.
          </p>
          <Link href="/coleccion" className="btn btn-ink mt-8 w-fit">
            Ver la colección
          </Link>
        </div>
      ) : (
        <div className="mt-14 grid gap-16 lg:grid-cols-12">
          <ul className="space-y-8 lg:col-span-7">
            {lines.map((line) => {
              const product = getProduct(line.slug);
              if (!product) return null;
              const color = product.colors?.find((c) => c.id === line.color);
              const size = product.sizes?.find((s) => s.id === line.size);
              return (
                <li
                  key={line.key}
                  className="grid grid-cols-[104px_1fr] gap-5 border-b border-linea pb-8"
                >
                  <Link
                    href={`/coleccion/${product.slug}`}
                    className="relative aspect-square overflow-hidden bg-papel-2"
                  >
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      sizes="104px"
                      className="object-cover"
                    />
                  </Link>
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link
                          href={`/coleccion/${product.slug}`}
                          className="font-display text-2xl tracking-tight"
                        >
                          {product.name}
                        </Link>
                        <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-gris">
                          {[color?.name, size?.name].filter(Boolean).join(" · ") ||
                            product.kicker}
                        </p>
                      </div>
                      <p className="font-mono nums">{formatCLP(linePrice(line))}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-linea">
                        <button
                          type="button"
                          className="flex h-10 w-10 items-center justify-center"
                          aria-label="Quitar uno"
                          onClick={() => setQty(line.key, line.qty - 1)}
                        >
                          <IconMinus className="h-3.5 w-3.5" />
                        </button>
                        <span className="font-mono nums w-8 text-center">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          className="flex h-10 w-10 items-center justify-center"
                          aria-label="Agregar uno"
                          onClick={() => setQty(line.key, line.qty + 1)}
                        >
                          <IconPlus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-gris hover:text-tinta"
                        onClick={() => remove(line.key)}
                      >
                        Sacar
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <aside className="lg:col-span-4 lg:col-start-9 lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm leading-relaxed text-tinta-suave">
              {remaining > 0
                ? `Te faltan ${formatCLP(remaining)} para despacho sin costo en Chile continental.`
                : "Despacho sin costo a Chile continental."}
            </p>
            <div className="mt-6 flex items-end justify-between border-t border-linea pt-6">
              <p className="kicker">Subtotal</p>
              <p className="font-display nums text-4xl tracking-tight">
                {formatCLP(subtotal)}
              </p>
            </div>
            <p className="mt-2 text-right text-[0.72rem] text-gris">
              IVA incluido · el despacho se calcula al pagar
            </p>
            <Link href="/pagar" className="btn btn-ink mt-8 w-full">
              Ir a pagar
            </Link>
            <Link href="/coleccion" className="btn btn-ghost mt-3 w-full">
              Seguir mirando
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}
