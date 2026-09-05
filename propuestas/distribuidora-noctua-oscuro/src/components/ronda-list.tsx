"use client";

import { useEffect, useState } from "react";
import { ronda } from "@/data/catalog";
import { currentStopIndex, isRondaLive } from "@/lib/night";
import { cn } from "@/lib/cn";

export function RondaList() {
  const [now, setNow] = useState(-1);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const tick = () => {
      const date = new Date();
      setLive(isRondaLive(date));
      setNow(currentStopIndex(date));
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <ol>
      {ronda.map((stop, index) => {
        const active = live && index === now;
        return (
          <li
            key={`${stop.hora}-${stop.lugar}`}
            className={cn(
              "flex items-baseline justify-between gap-6 border-b border-line py-3",
              active && "ronda-now",
            )}
          >
            <span className="font-mono text-sm tabular-nums">
              {stop.hora}
              {active ? (
                <span className="ml-3 font-mono text-[0.58rem] uppercase tracking-[0.2em]">
                  Ahora
                </span>
              ) : null}
            </span>
            <span
              className={cn(
                "text-right text-sm",
                active ? "text-paper" : "text-paper-dim",
              )}
            >
              {stop.lugar}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
