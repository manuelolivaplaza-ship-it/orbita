"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const levels = [
  { id: "cota-12", value: "+12.40", label: "Idea" },
  { id: "cota-9", value: "+9.20", label: "Norte" },
  { id: "cota-6", value: "+6.00", label: "Obras" },
  { id: "cota-3", value: "+3.20", label: "Oficio" },
  { id: "cota-0", value: "±0.00", label: "Encargo" },
];

export function CotaRail() {
  const [active, setActive] = useState(levels[0].id);

  useEffect(() => {
    const nodes = levels
      .map((level) => document.getElementById(level.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.45, 0.6], rootMargin: "-20% 0px -40% 0px" }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Cotas de la lámina"
      className="pointer-events-none fixed top-1/2 right-4 z-30 hidden -translate-y-1/2 xl:block"
    >
      <ol className="pointer-events-auto space-y-3">
        {levels.map((level) => {
          const isActive = active === level.id;
          return (
            <li key={level.id}>
              <a
                href={`#${level.id}`}
                className={cn(
                  "font-mono nums flex items-center justify-end gap-2 text-[10px] tracking-wide transition-colors",
                  isActive ? "text-cobre" : "text-muted hover:text-ink"
                )}
              >
                <span className="hidden 2xl:inline">{level.label}</span>
                <span>{level.value}</span>
                <span
                  className={cn(
                    "h-px transition-all",
                    isActive ? "w-8 bg-cobre" : "w-4 bg-line"
                  )}
                />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
