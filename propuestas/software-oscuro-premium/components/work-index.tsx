"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/cn";

export function WorkIndex() {
  const [active, setActive] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const current = projects.find((p) => p.slug === active);

  return (
    <div
      className="relative"
      onPointerMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      <ul className="border-t border-line">
        {projects.map((p, i) => (
          <li key={p.slug} className="border-b border-line">
            <Link
              href={`/trabajo/${p.slug}`}
              className="group grid grid-cols-12 items-baseline gap-4 px-5 py-8 md:px-10 md:py-10"
              onPointerEnter={() => setActive(p.slug)}
              onPointerLeave={() => setActive(null)}
              onFocus={() => setActive(p.slug)}
              onBlur={() => setActive(null)}
            >
              <span className="col-span-2 font-mono text-[11px] tracking-[0.22em] text-gold md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "col-span-10 font-display text-[clamp(1.6rem,4.2vw,3.8rem)] leading-[0.95] font-semibold tracking-tight transition-colors duration-500 md:col-span-6",
                  active === p.slug ? "text-gold" : "text-ivory",
                )}
              >
                {p.name}
              </span>
              <span className="col-span-6 hidden font-mono text-[11px] tracking-[0.16em] text-mute uppercase md:col-span-3 md:block">
                {p.category} · {p.location}
              </span>
              <span className="col-span-6 hidden text-right font-mono text-[11px] tracking-[0.16em] text-stone md:col-span-2 md:block">
                {p.year}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {current ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed z-20 hidden w-[320px] overflow-hidden ring-1 ring-gold/30 lg:block"
          style={{
            left: Math.min(pos.x + 28, typeof window !== "undefined" ? window.innerWidth - 360 : pos.x),
            top: Math.max(24, pos.y - 110),
          }}
        >
          <div className="relative aspect-[16/10]">
            <Image
              src={current.image}
              alt=""
              fill
              sizes="320px"
              className="img-luxe object-cover"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
