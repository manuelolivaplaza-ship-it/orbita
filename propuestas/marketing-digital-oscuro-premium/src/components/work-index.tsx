"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cases, type CaseStudy } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WorkIndex({ items = cases }: { items?: CaseStudy[] }) {
  const [active, setActive] = useState(items[0]?.slug ?? "");
  const current = items.find((c) => c.slug === active) ?? items[0];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="relative hidden aspect-[4/5] overflow-hidden bg-ink lg:col-span-5 lg:block">
        {current ? (
          <Image
            key={current.slug}
            src={current.cover}
            alt={`${current.client}, ${current.sector}`}
            fill
            sizes="40vw"
            className="object-cover"
          />
        ) : null}
      </div>
      <ul className="lg:col-span-7">
        {items.map((c, i) => {
          const on = c.slug === active;
          return (
            <li key={c.slug} className="border-b border-line">
              <Link
                href={`/trabajo/${c.slug}`}
                onMouseEnter={() => setActive(c.slug)}
                onFocus={() => setActive(c.slug)}
                className={cn(
                  "group block py-5 transition-colors",
                  on ? "text-paper" : "text-paper-dim hover:text-paper"
                )}
              >
                <span className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 sm:gap-6">
                  <span className="kicker tabular w-8 text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.05] tracking-tight">
                      {c.client}
                    </span>
                    <span className="mt-1 block text-[0.9rem] text-muted">
                      {c.sector} · {c.year}
                    </span>
                  </span>
                  <span className="hidden text-right sm:block">
                    <span className="font-display text-2xl tabular leading-none text-ember">
                      {c.metric}
                    </span>
                    <span className="mt-1 block font-mono text-[0.62rem] tracking-[0.14em] text-muted uppercase">
                      {c.metricLabel}
                    </span>
                  </span>
                </span>
                <span className="relative mt-4 block aspect-[16/9] overflow-hidden bg-ink lg:hidden">
                  <Image
                    src={c.cover}
                    alt={`${c.client}, ${c.sector}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
