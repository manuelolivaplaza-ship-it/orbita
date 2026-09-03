"use client";

import { useEffect, useState } from "react";
import { nightLabel, santiagoNow } from "@/lib/hours";

export function NightClock({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (!now) {
    return (
      <p className={className}>
        <span className="inline-flex items-center gap-2">
          <span className="dot-live" aria-hidden />
          <span className="tabular tracking-wide">—:— · Santiago</span>
        </span>
      </p>
    );
  }

  const { time, night } = santiagoNow(now);

  return (
    <p className={className}>
      <span className="inline-flex items-center gap-2">
        <span className="dot-live" aria-hidden />
        <span className="tabular tracking-wide">{time} · Santiago</span>
      </span>
      <span className="text-muted"> · {nightLabel(night)}</span>
    </p>
  );
}
