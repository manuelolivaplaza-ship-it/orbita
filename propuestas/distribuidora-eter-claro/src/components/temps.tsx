"use client";

import { useEffect, useState } from "react";
import { estados } from "@/data/catalog";
import { formatTemp } from "@/lib/format";
import { cn } from "@/lib/cn";

export function Temps({ className }: { className?: string }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => setTick((n) => n + 1), 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <dl className={cn("grid gap-3 font-mono text-[0.62rem] uppercase tracking-[0.18em]", className)}>
      {estados.map((estado, index) => {
        const drift = Math.sin(tick + index) * 0.08;
        const value = estado.readout + drift;
        return (
          <div key={estado.id} className="flex items-baseline justify-between gap-6">
            <dt className="text-current/55">{estado.name}</dt>
            <dd className="tabular-nums text-current">
              {formatTemp(value)} °C
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
