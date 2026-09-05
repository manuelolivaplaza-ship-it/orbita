"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

export function Gallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  if (!current) return null;

  return (
    <div>
      <div className="frame relative aspect-[16/9] md:aspect-[2/1]">
        <Image
          src={current}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      {images.length > 1 ? (
        <div className="mt-3 grid grid-cols-4 gap-3 md:grid-cols-6">
          {images.map((src, index) => (
            <button
              key={src + index}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "relative aspect-[16/10] overflow-hidden border",
                active === index ? "border-amber" : "border-line",
              )}
              aria-label={`Imagen ${index + 1}`}
              aria-current={active === index}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="160px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
