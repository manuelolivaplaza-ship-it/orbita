"use client";

import { useState } from "react";
import { faqs } from "@/data/catalog";

export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <div className="border-t border-line">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              className="flex w-full items-baseline justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="font-display text-xl font-light tracking-tight md:text-2xl">
                {item.q}
              </span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                {isOpen ? "Cerrar" : "Abrir"}
              </span>
            </button>
            <div className="faq-panel" data-open={isOpen}>
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink-soft">
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
