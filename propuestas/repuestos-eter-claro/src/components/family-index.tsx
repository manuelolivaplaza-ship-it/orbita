"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { families } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FamilyIndex() {
  const [active, setActive] = useState(families[0].slug);
  const current = families.find((item) => item.slug === active) ?? families[0];

  return (
    <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
      <ol className="lg:col-span-6">
        {families.map((item) => {
          const on = item.slug === active;
          return (
            <li key={item.slug} className="border-t border-line last:border-b">
              <Link
                href={`/familias/${item.slug}`}
                onMouseEnter={() => setActive(item.slug)}
                onFocus={() => setActive(item.slug)}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-5 lg:py-6"
              >
                <span
                  className={cn(
                    "font-sku text-[11px] transition-colors duration-[280ms]",
                    on ? "text-ether" : "text-muted"
                  )}
                >
                  {item.index}
                </span>
                <span
                  className={cn(
                    "font-display text-[clamp(1.8rem,4vw,3.1rem)] leading-none tracking-tight transition-colors duration-[280ms]",
                    on ? "text-ink" : "text-ink/45 group-hover:text-ink"
                  )}
                >
                  {item.name}
                </span>
                <span className="hidden text-[13px] text-muted sm:inline">
                  {item.kicker}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>

      <div className="relative aspect-[4/3] overflow-hidden bg-vapor lg:sticky lg:top-28 lg:col-span-6">
        {families.map((item) => (
          <Image
            key={item.slug}
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={cn(
              "object-cover transition-opacity duration-[280ms]",
              item.slug === current.slug
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            )}
          />
        ))}
        <p className="absolute bottom-0 left-0 right-0 bg-mist/80 px-5 py-4 text-[14px] leading-relaxed text-ink backdrop-blur-sm">
          {current.lead}
        </p>
      </div>
    </div>
  );
}
