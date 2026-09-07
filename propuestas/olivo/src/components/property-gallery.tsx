"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function PropertyGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted md:aspect-[16/10]">
        <Image
          src={images[active]}
          alt={`${title} — foto ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
        />
      </div>
      {images.length > 1 ? (
        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver foto ${i + 1}`}
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-border",
                active === i && "ring-2 ring-primary",
              )}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="160px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
