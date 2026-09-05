"use client";

import { useState } from "react";
import { SectionHead } from "@/components/section-head";
import { services } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
      <SectionHead
        kicker="Oficio"
        title="Cuatro maneras de tallar."
        aside="No es un menú. Es el perímetro de lo que sabemos hacer bien — y de lo que no vamos a fingir."
      />
      <div className="mt-16 border-t border-line">
        {services.map((s, i) => {
          const open = active === i;
          return (
            <article
              key={s.id}
              className="border-b border-line"
              onMouseEnter={() => setActive(i)}
            >
              <button
                type="button"
                className="flex w-full items-baseline gap-6 py-8 text-left md:gap-10 md:py-10"
                onClick={() => setActive(i)}
                aria-expanded={open}
              >
                <span className="font-mono text-[11px] tracking-[0.22em] text-gold">
                  {s.index}
                </span>
                <span
                  className={cn(
                    "font-display text-[clamp(2rem,5vw,4.6rem)] leading-none font-semibold tracking-tight transition-colors duration-500",
                    open ? "text-ivory" : "text-ivory/55",
                  )}
                >
                  {s.title}
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex max-w-2xl flex-col gap-3 pb-10 pl-[3.2rem] md:pl-[4.6rem]">
                    <p className="text-ivory">{s.lead}</p>
                    <p className="text-sm leading-relaxed text-stone md:text-[15px]">
                      {s.body}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
