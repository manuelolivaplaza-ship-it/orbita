"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Arrow } from "@/components/mark";
import { careers } from "@/data/content";
import { cn } from "@/lib/cn";

export function CareerIndex() {
  const [active, setActive] = useState(0);
  const current = careers[active] ?? careers[0];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-7">
        <ul className="border-t border-linea">
          {careers.map((career, index) => {
            const isActive = index === active;
            return (
              <li key={career.slug} className="border-b border-linea">
                <Link
                  href={`/carreras/${career.slug}`}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-6 md:gap-8"
                >
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-cielo">
                    {career.n}
                  </span>
                  <span
                    className={cn(
                      "font-display text-[clamp(1.7rem,3.6vw,3.1rem)] font-light leading-[0.95] tracking-tight transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-55 group-hover:opacity-100",
                    )}
                  >
                    {career.title}
                  </span>
                  <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gris md:inline">
                    {career.years} años
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28">
          <div className="frame relative aspect-[4/5]">
            <Image
              src={current.image}
              alt={current.alt}
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gris">
            {current.school} · {current.cupos} cupos
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-tinta-suave">
            {current.lead}
          </p>
          <Link
            href={`/carreras/${current.slug}`}
            className="link-line mt-5 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            La carrera
            <Arrow />
          </Link>
        </div>
      </div>
    </div>
  );
}
