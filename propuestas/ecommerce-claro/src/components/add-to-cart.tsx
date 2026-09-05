"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/lib/cart";
import { formatCLP } from "@/lib/format";
import type { Product } from "@/lib/products";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [color, setColor] = useState(product.colors?.[0]?.id);
  const [size, setSize] = useState(product.sizes?.[0]?.id);
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");

  const unit = useMemo(() => {
    const s = product.sizes?.find((x) => x.id === size);
    return s?.price ?? product.price;
  }, [product, size]);

  const agotado = product.stock <= 0;

  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={(e) => {
        e.preventDefault();
        if (agotado) return;
        add(product.slug, qty, color, size);
        setNote("En el carrito.");
        window.setTimeout(() => setNote(""), 2200);
      }}
    >
      {product.colors ? (
        <fieldset>
          <legend className="kicker">Color</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setColor(c.id)}
                className={cn(
                  "flex items-center gap-2 border px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.18em]",
                  color === c.id
                    ? "border-tinta bg-tinta text-papel"
                    : "border-linea hover:border-tinta",
                )}
              >
                <span
                  className="h-3 w-3 border border-linea"
                  style={{ background: c.hex }}
                />
                {c.name}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {product.sizes ? (
        <fieldset>
          <legend className="kicker">Medida</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSize(s.id)}
                className={cn(
                  "border px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.18em]",
                  size === s.id
                    ? "border-tinta bg-tinta text-papel"
                    : "border-linea hover:border-tinta",
                )}
              >
                {s.name}
                {s.price ? ` · ${formatCLP(s.price)}` : ""}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="kicker">Cantidad</p>
          <div className="mt-3 flex items-center border border-linea">
            <button
              type="button"
              className="h-11 w-11"
              aria-label="Quitar uno"
              onClick={() => setQty((n) => Math.max(1, n - 1))}
            >
              −
            </button>
            <span className="font-mono nums w-8 text-center">{qty}</span>
            <button
              type="button"
              className="h-11 w-11"
              aria-label="Agregar uno"
              onClick={() => setQty((n) => Math.min(product.stock, n + 1))}
            >
              +
            </button>
          </div>
        </div>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris">
          {product.stock} en casa
        </p>
      </div>

      <div>
        <p className="font-display nums text-4xl tracking-tight md:text-5xl">
          {formatCLP(unit)}
        </p>
        <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris">
          IVA incluido · despacho desde {formatCLP(3990)}
        </p>
      </div>

      <button type="submit" className="btn btn-ink w-full" disabled={agotado}>
        {agotado ? "Agotada" : "Añadir al carrito"}
      </button>
      {note ? (
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-bronce">
          {note}
        </p>
      ) : (
        <p className="text-[0.82rem] leading-relaxed text-tinta-suave">
          Despacho sin costo desde {formatCLP(site.freeShippingFrom)}. Diez días
          para devolver, con la pieza intacta.
        </p>
      )}
    </form>
  );
}
