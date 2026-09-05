"use client";

import { useState } from "react";
import { faqs } from "@/data/content";
import { cn } from "@/lib/cn";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="border-t border-linea">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="border-b border-linea">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="font-display text-2xl font-light leading-snug tracking-tight md:text-3xl">
                {item.q}
              </span>
              <span
                className={cn(
                  "mt-2 shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-cielo",
                  isOpen ? "opacity-100" : "opacity-60",
                )}
              >
                {isOpen ? "Cerrar" : "Abrir"}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 text-[16px] leading-relaxed text-tinta-suave">
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
