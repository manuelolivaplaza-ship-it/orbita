"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Accordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((item, i) => {
        const active = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              onClick={() => setOpen(active ? null : i)}
              aria-expanded={active}
            >
              <span className="font-serif text-2xl tracking-tight md:text-3xl">
                {item.q}
              </span>
              <span
                className={cn(
                  "font-mono text-copper transition-transform duration-500",
                  active && "rotate-45",
                )}
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-500",
                active ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-8 text-[1.02rem] leading-relaxed text-ivory-soft">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
