"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { isWaxing, moonIllumination } from "@/lib/night";

export function Moon({ className }: { className?: string }) {
  const [phase, setPhase] = useState<{ k: number; waxing: boolean } | null>(
    null,
  );

  useEffect(() => {
    const tick = () =>
      setPhase({ k: moonIllumination(), waxing: isWaxing() });
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const k = phase?.k ?? 0.5;
  const waxing = phase?.waxing ?? true;
  const offset = k * 12.4 * (waxing ? 1 : -1);

  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn("h-3.5 w-3.5", className)}
    >
      <circle cx="8" cy="8" r="6.2" fill="#c5cdd8" />
      <circle cx={8 + offset} cy="8" r="6.2" fill="#050506" />
    </svg>
  );
}
