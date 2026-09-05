"use client";

import { useState } from "react";
import { faqs } from "@/data/content";
import { cn } from "@/lib/cn";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-line border-y border-line">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <li key={item.q}>
            <button
              type="button"
              className="flex w-full items-baseline justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                {item.q}
              </span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-amber">
                {isOpen ? "Cerrar" : "Abrir"}
              </span>
            </button>
            <p
              className={cn(
                "max-w-2xl overflow-hidden pb-6 text-paper-dim transition-[max-height,opacity] duration-500",
                isOpen ? "max-h-80 opacity-100" : "max-h-0 pb-0 opacity-0",
              )}
            >
              {item.a}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
