"use client";

import { useState } from "react";
import { faqs } from "@/data/content";
import { cn } from "@/lib/cn";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-linea border-y border-linea">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-2xl leading-snug md:text-3xl">
                {item.q}
              </span>
              <span
                className={cn(
                  "mt-2 font-mono text-xs text-hoja transition-transform duration-300",
                  isOpen && "rotate-45",
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <p className="overflow-hidden pr-10 text-[17px] leading-relaxed text-tinta-suave">
                <span className="block pb-7">{item.a}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
