"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function PropertyGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const total = images.length;

  function go(delta: number) {
    setActive((i) => (i + delta + total) % total);
  }

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted md:aspect-[16/10]">
        <Image
          src={images[active]}
          alt={`${title} — foto ${active + 1} de ${total}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
        />
        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto anterior"
              className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm transition hover:bg-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Foto siguiente"
              className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm transition hover:bg-white"
            >
              <ChevronRight className="size-5" />
            </button>
            <span className="absolute right-3 bottom-3 rounded-full bg-[#171c19]/75 px-3 py-1 text-[11px] tracking-wide text-white">
              {active + 1} / {total}
            </span>
          </>
        ) : null}
      </div>
      {total > 1 ? (
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
