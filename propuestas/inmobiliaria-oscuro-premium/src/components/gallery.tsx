"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Gallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  if (!current) return null;

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden bg-surface sm:aspect-[16/9]">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <span className="absolute right-4 bottom-4 font-mono text-[0.68rem] tracking-[0.16em] text-paper uppercase">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>
      </div>
      {images.length > 1 ? (
        <div className="grid grid-cols-3 gap-px bg-line">
          {images.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver fotografía ${i + 1}`}
              aria-pressed={i === active}
              className={cn(
                "relative aspect-[16/10] bg-ink",
                i === active ? "opacity-100" : "opacity-55 hover:opacity-90",
              )}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="33vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
