"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const lines = [
  "A las tres nadie contesta.",
  "La lista no termina.",
  "El pecho no abre.",
  "Mañana hay que rendir igual.",
];

export function ThreeAm() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setCount(lines.length);
      setDone(true);
      return;
    }

    if (count >= lines.length) {
      const id = window.setTimeout(() => setDone(true), 700);
      return () => window.clearTimeout(id);
    }

    const id = window.setTimeout(() => setCount((value) => value + 1), 1400);
    return () => window.clearTimeout(id);
  }, [count]);

  return (
    <div className="border border-line bg-ink px-8 py-12 md:px-12 md:py-16">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
        03:00 · Santiago
      </p>
      <ul className="mt-8 space-y-3">
        {lines.map((line, index) => (
          <li
            key={line}
            className={cn(
              "font-display text-2xl font-semibold leading-snug tracking-tight md:text-4xl",
              index < count ? "text-paper" : "text-transparent",
            )}
          >
            {line}
            {index === count - 1 && !done ? (
              <span className="type-cursor" aria-hidden="true" />
            ) : null}
          </li>
        ))}
      </ul>
      <p
        className={cn(
          "mt-10 max-w-md text-base leading-relaxed text-paper-dim transition-opacity duration-700",
          done ? "opacity-100" : "opacity-0",
        )}
      >
        No es carácter. Es un sistema de alarma. En NOCTUA se nombra — a la
        hora en que ocurre, o a la mañana siguiente.
      </p>
    </div>
  );
}
