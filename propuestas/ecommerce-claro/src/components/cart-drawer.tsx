"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { IconClose, IconMinus, IconPlus } from "@/components/icons";
import { linePrice, useCart } from "@/lib/cart";
import { formatCLP } from "@/lib/format";
import { getProduct } from "@/lib/products";
import { site } from "@/lib/site";

export function CartDrawer() {
  const { lines, count, subtotal, setQty, remove, open, setOpen } = useCart();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  const remaining = Math.max(0, site.freeShippingFrom - subtotal);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-tinta/25"
        aria-label="Cerrar carrito"
        onClick={() => setOpen(false)}
      />
      <aside
        className="absolute inset-y-0 right-0 flex w-full max-w-[440px] flex-col border-l border-linea bg-papel"
        aria-label="Carrito"
      >
        <div className="flex h-[4.5rem] items-center justify-between border-b border-linea px-6">
          <p className="kicker">
            Carrito · {count.toString().padStart(2, "0")}
          </p>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center"
            aria-label="Cerrar"
            onClick={() => setOpen(false)}
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col justify-center">
              <p className="font-display text-3xl tracking-tight">
                La mesa está vacía.
              </p>
              <Link
                href="/coleccion"
                className="btn btn-ink mt-8 w-fit"
                onClick={() => setOpen(false)}
              >
                Ver la colección
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {lines.map((line) => {
                const product = getProduct(line.slug);
                if (!product) return null;
                const color = product.colors?.find((c) => c.id === line.color);
                const size = product.sizes?.find((s) => s.id === line.size);
                return (
                  <li key={line.key} className="grid grid-cols-[88px_1fr] gap-4">
                    <Link
                      href={`/coleccion/${product.slug}`}
                      className="relative aspect-square overflow-hidden bg-papel-2"
                      onClick={() => setOpen(false)}
                    >
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        sizes="88px"
                        className="object-cover"
                      />
                    </Link>
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            href={`/coleccion/${product.slug}`}
                            className="font-display text-xl leading-tight tracking-tight"
                            onClick={() => setOpen(false)}
                          >
                            {product.name}
                          </Link>
                          <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-gris">
                            {[color?.name, size?.name].filter(Boolean).join(" · ") ||
                              product.kicker}
                          </p>
                        </div>
                        <p className="font-mono nums text-sm">
                          {formatCLP(linePrice(line))}
                        </p>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-linea">
                          <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center"
                            aria-label="Quitar uno"
                            onClick={() => setQty(line.key, line.qty - 1)}
                          >
                            <IconMinus className="h-3.5 w-3.5" />
                          </button>
                          <span className="font-mono nums w-6 text-center text-sm">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center"
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
          )}
        </div>

        {lines.length > 0 ? (
          <div className="border-t border-linea px-6 py-6">
            <p className="text-[0.82rem] text-tinta-suave">
              {remaining > 0
                ? `Te faltan ${formatCLP(remaining)} para despacho sin costo.`
                : "Despacho sin costo a Chile continental."}
            </p>
            <div className="mt-4 flex items-end justify-between">
              <p className="kicker">Subtotal</p>
              <p className="font-display nums text-3xl tracking-tight">
                {formatCLP(subtotal)}
              </p>
            </div>
            <p className="mt-1 text-right text-[0.72rem] text-gris">IVA incluido</p>
            <div className="mt-6 grid gap-3">
              <Link
                href="/pagar"
                className="btn btn-ink"
                onClick={() => setOpen(false)}
              >
                Ir a pagar
              </Link>
              <Link
                href="/carrito"
                className="btn btn-ghost"
                onClick={() => setOpen(false)}
              >
                Ver el carrito
              </Link>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
