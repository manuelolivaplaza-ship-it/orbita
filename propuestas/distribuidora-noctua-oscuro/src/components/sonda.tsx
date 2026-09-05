"use client";

import { useEffect, useState } from "react";
import { camaras } from "@/data/catalog";
import { cn } from "@/lib/cn";
import { formatTemp } from "@/lib/format";

export function Sonda({ className }: { className?: string }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => setTick((n) => n + 1), 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <dl
      className={cn(
        "grid gap-3 font-mono text-[0.62rem] uppercase tracking-[0.18em]",
        className,
      )}
    >
      {camaras.map((camara, index) => {
        const drift = Math.sin(tick + index) * 0.08;
        const value = camara.readout + drift;
        return (
          <div key={camara.id} className="flex items-baseline justify-between gap-6">
            <dt className="text-current/55">{camara.name}</dt>
            <dd
              className={`tabular-nums ${camara.readout < 0 ? "text-ice" : "text-current"}`}
            >
              {formatTemp(value)} °C
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
