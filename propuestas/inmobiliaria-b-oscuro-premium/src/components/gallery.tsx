"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { padIndex } from "@/lib/format";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = useCallback(() => {
    setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setActive((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  return (
    <>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative block aspect-[16/10] w-full overflow-hidden bg-[#10100e]"
          aria-label="Abrir galería"
        >
          <Image
            src={images[active]}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </button>

        <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between">
          <p className="font-mono text-[10px] tracking-[0.24em] text-gold">
            {padIndex(active)} / {padIndex(images.length - 1)}
          </p>
          <div className="flex gap-2">
            <button type="button" onClick={prev} className="btn-gold px-4 py-2">
              ←
            </button>
            <button type="button" onClick={next} className="btn-gold px-4 py-2">
              →
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden border",
              i === active ? "border-gold" : "border-transparent opacity-60 hover:opacity-100",
            )}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="160px" />
          </button>
        ))}
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-[82vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image src={images[active]} alt={alt} fill className="object-contain" />
          </div>
          <button
            type="button"
            className="btn-gold absolute top-6 right-6"
            onClick={() => setOpen(false)}
          >
            Cerrar
          </button>
        </div>
      ) : null}
    </>
  );
}
