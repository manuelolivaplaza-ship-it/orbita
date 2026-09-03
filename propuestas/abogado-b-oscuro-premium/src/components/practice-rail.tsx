"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { practices } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PracticeRail() {
  const [active, setActive] = useState(practices[0].slug);
  const current = practices.find((p) => p.slug === active) ?? practices[0];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <ol className="lg:col-span-7">
        {practices.map((p) => {
          const isActive = p.slug === active;
          return (
            <li key={p.slug} className="border-t border-line last:border-b">
              <Link
                href={`/materias/${p.slug}`}
                onMouseEnter={() => setActive(p.slug)}
                onFocus={() => setActive(p.slug)}
                className="group grid grid-cols-[3.5rem_1fr] items-baseline gap-4 py-6 sm:grid-cols-[4.5rem_1fr_auto] sm:py-7"
              >
                <span
                  className={cn(
                    "font-mono text-[0.72rem] tabular tracking-[0.16em] transition-colors",
                    isActive ? "text-copper" : "text-muted"
                  )}
                >
                  {p.folio}
                </span>
                <span>
                  <span
                    className={cn(
                      "font-display block text-[clamp(1.6rem,3vw,2.35rem)] leading-[1.05] tracking-tight transition-colors",
                      isActive ? "text-copper" : "text-paper group-hover:text-copper"
                    )}
                  >
                    {p.title}
                  </span>
                  <span className="mt-1 block text-[0.92rem] text-muted">
                    {p.short}
                  </span>
                </span>
                <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-copper sm:block">
                  Ver pieza
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
      <div className="relative hidden min-h-[420px] overflow-hidden border border-line lg:col-span-5 lg:block">
        <Image
          key={current.slug}
          src={current.image}
          alt=""
          fill
          sizes="40vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
        <p className="absolute bottom-0 left-0 right-0 p-6 font-display text-2xl leading-snug text-paper">
          {current.lead}
        </p>
      </div>
    </div>
  );
}
