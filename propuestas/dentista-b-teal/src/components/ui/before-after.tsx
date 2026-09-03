"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  className,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}) {
  const [pos, setPos] = useState(52);

  return (
    <div
      className={cn(
        "relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-foam",
        className
      )}
    >
      <Image
        src={before}
        alt={beforeAlt}
        fill
        className="object-cover scale-[1.42] object-[center_46%]"
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <Image
          src={after}
          alt={afterAlt}
          fill
          className="object-cover scale-[1.42] object-[center_46%]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-lagoon"
        style={{ left: `${pos}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 z-10 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lagoon/50 bg-card/90 shadow-sm backdrop-blur-sm"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute inset-0 grid place-items-center font-display text-[0.65rem] tracking-widest text-foreground">
          ↔
        </span>
      </div>
      <span className="absolute top-4 left-4 rounded-full bg-card/85 px-3 py-1 text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground backdrop-blur-sm">
        Antes
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-primary/90 px-3 py-1 text-[0.7rem] tracking-[0.16em] uppercase text-primary-foreground backdrop-blur-sm">
        Después
      </span>
      <input
        type="range"
        min={4}
        max={96}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Comparar antes y después"
        className="absolute inset-0 z-20 cursor-ew-resize opacity-0"
      />
    </div>
  );
}
