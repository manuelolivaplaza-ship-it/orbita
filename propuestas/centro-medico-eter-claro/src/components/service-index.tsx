"use client";

import Link from "next/link";
import { useState } from "react";
import { specialties } from "@/data/content";
import { formatCLP } from "@/lib/format";
import { cn } from "@/lib/cn";

export function ServiceIndex() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="border-t border-linea">
      {specialties.map((service) => {
        const isOpen = open === service.slug;
        return (
          <div key={service.slug} className="border-b border-linea">
            <button
              type="button"
              className="grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-4 py-7 text-left md:gap-8"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : service.slug)}
            >
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-eter">
                {service.n}
              </span>
              <span className="font-display text-[clamp(1.8rem,4vw,3.4rem)] font-light leading-[0.95] tracking-tight">
                {service.title}
              </span>
              <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gris md:inline">
                {isOpen ? "Cerrar" : "Ver"}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="grid gap-6 pb-8 md:grid-cols-12">
                  <p className="max-w-md text-[16px] leading-relaxed text-tinta-suave md:col-span-6 md:col-start-2">
                    {service.forWhom}
                  </p>
                  <div className="flex flex-wrap items-end justify-between gap-4 md:col-span-4 md:col-start-9">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gris">
                      {service.duration}
                      <br />
                      desde {formatCLP(service.priceFrom)}
                    </p>
                    <Link
                      href={`/especialidades/${service.slug}`}
                      className="link-eter font-mono text-[0.62rem] uppercase tracking-[0.22em]"
                    >
                      La especialidad
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
