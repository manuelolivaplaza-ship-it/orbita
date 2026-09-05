"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Chapter } from "@/components/reveal";
import { disciplines } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Disciplines() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden border-t border-line px-5 py-28 md:px-8 lg:px-12 lg:py-36">
      <Chapter n="02" label="Método" />
      <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-2xl font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl">
          Cuatro prácticas.
          <span className="italic text-ivory-soft"> Un solo cuerpo.</span>
        </h2>
        <Link
          href="/entrenamiento"
          className="font-mono text-[0.62rem] tracking-[0.28em] text-copper uppercase link-line"
        >
          Ver el entrenamiento
        </Link>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        <div className="relative hidden aspect-[4/5] overflow-hidden lg:col-span-5 lg:block">
          {disciplines.map((d, i) => (
            <Image
              key={d.slug}
              src={d.image}
              alt={d.title}
              fill
              className={cn(
                "object-cover transition-opacity duration-700",
                active === i ? "opacity-100" : "opacity-0",
              )}
              sizes="40vw"
            />
          ))}
        </div>
        <ul className="lg:col-span-7">
          {disciplines.map((d, i) => (
            <li key={d.slug} className="border-t border-line last:border-b">
              <button
                type="button"
                className="group flex w-full items-start justify-between gap-6 py-7 text-left"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className="font-mono text-[0.62rem] tracking-[0.28em] text-copper">
                  {d.n}
                </span>
                <span className="flex-1">
                  <span
                    className={cn(
                      "block font-serif text-4xl tracking-tight transition-colors duration-500 md:text-5xl",
                      active === i ? "text-ivory" : "text-ivory/45",
                    )}
                  >
                    {d.title}
                  </span>
                  <span
                    className={cn(
                      "mt-3 block max-w-md text-[0.98rem] leading-relaxed text-ivory-soft transition-opacity duration-500",
                      active === i ? "opacity-100" : "opacity-0 lg:opacity-0",
                    )}
                  >
                    {d.summary}
                  </span>
                </span>
              </button>
              <div className="relative mb-6 aspect-[16/10] overflow-hidden lg:hidden">
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
