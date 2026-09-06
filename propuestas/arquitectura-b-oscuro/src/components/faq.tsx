"use client";

import { useState } from "react";
import { faqs } from "@/lib/studio";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="faq-item">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-display text-xl leading-snug sm:text-2xl">
                {item.q}
              </span>
              <span className="mt-1 font-mono text-xs text-brass" aria-hidden>
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-sm leading-7 text-paper-dim sm:text-[0.98rem]">
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
