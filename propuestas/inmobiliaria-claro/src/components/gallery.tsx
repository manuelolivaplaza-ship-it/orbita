"use client";

import Image from "next/image";
import { useState } from "react";
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
    <div className="bg-luz-2">
      <div className="relative aspect-[16/10] min-h-[42vh] w-full lg:aspect-[16/8] lg:min-h-[58vh]">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {images.length > 1 ? (
        <div className="shell flex gap-2 py-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "relative h-16 w-24 overflow-hidden bg-luz-3",
                index === active ? "ring-1 ring-ink" : "opacity-70 hover:opacity-100"
              )}
              aria-label={`Imagen ${index + 1}`}
              aria-current={index === active}
            >
              <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
