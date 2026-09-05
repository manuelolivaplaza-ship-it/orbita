"use client";

import { useState } from "react";
import { useCart } from "@/components/cart";
import { Arrow } from "@/components/logo";

export function AddToCart({ slug }: { slug: string }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [done, setDone] = useState(false);

  return (
    <form
      className="flex flex-wrap items-center gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        add(slug, qty);
        setDone(true);
        window.setTimeout(() => setDone(false), 1800);
      }}
    >
      <label className="sr-only" htmlFor={`qty-${slug}`}>
        Cantidad
      </label>
      <div className="flex items-center border border-linea">
        <button
          type="button"
          className="h-12 w-11 text-lg"
          onClick={() => setQty((n) => Math.max(1, n - 1))}
          aria-label="Restar"
        >
          −
        </button>
        <input
          id={`qty-${slug}`}
          className="nums h-12 w-10 border-0 bg-transparent text-center"
          value={qty}
          onChange={(event) => {
            const n = Number(event.target.value);
            if (Number.isFinite(n)) setQty(Math.min(12, Math.max(1, n)));
          }}
        />
        <button
          type="button"
          className="h-12 w-11 text-lg"
          onClick={() => setQty((n) => Math.min(12, n + 1))}
          aria-label="Sumar"
        >
          +
        </button>
      </div>
      <button type="submit" className="btn btn-ink" aria-live="polite">
        {done ? "En la selección" : "Agregar a la selección"}
        <Arrow />
      </button>
    </form>
  );
}
