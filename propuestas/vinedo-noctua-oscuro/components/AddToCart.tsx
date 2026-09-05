"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { cn } from "@/lib/cn";

export function AddToCart({
  slug,
  stock,
  className,
}: {
  slug: string;
  stock: number;
  className?: string;
}) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const soldOut = stock <= 0;

  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-center", className)}>
      <div className="flex items-center border border-bone/20">
        <button
          className="px-4 py-3 text-lg"
          onClick={() => setQty((n) => Math.max(1, n - 1))}
          aria-label="Menos"
          disabled={soldOut}
        >
          −
        </button>
        <span className="min-w-10 text-center font-mono text-sm tabular-nums">
          {qty}
        </span>
        <button
          className="px-4 py-3 text-lg"
          onClick={() => setQty((n) => Math.min(stock, n + 1))}
          aria-label="Más"
          disabled={soldOut}
        >
          +
        </button>
      </div>
      <button
        className="btn flex-1"
        disabled={soldOut}
        onClick={() => add(slug, qty)}
      >
        {soldOut ? "Agotado" : "Agregar al carrito"}
      </button>
    </div>
  );
}
