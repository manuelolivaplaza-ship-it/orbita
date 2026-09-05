"use client";

import { useEffect, useState } from "react";

export function Clock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      setNow(
        new Intl.DateTimeFormat("es-CL", {
          timeZone: "America/Santiago",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
      Santiago {now ?? "—:—"} · hora de montaje
    </p>
  );
}
