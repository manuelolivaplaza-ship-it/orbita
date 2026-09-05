"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Product } from "@/lib/products";

export function Gallery({ product }: { product: Product }) {
  const [current, setCurrent] = useState(0);
  const shots = product.images;

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden bg-papel-2 md:aspect-[5/6]">
        <Image
          src={shots[current] ?? product.image}
          alt={product.name}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      {shots.length > 1 ? (
        <div className="mt-3 grid grid-cols-3 gap-3">
          {shots.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Foto ${i + 1}`}
              className={cn(
                "relative aspect-square overflow-hidden bg-papel-2",
                current === i ? "ring-1 ring-tinta" : "opacity-70 hover:opacity-100",
              )}
            >
              <Image src={src} alt="" fill sizes="20vw" className="object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
