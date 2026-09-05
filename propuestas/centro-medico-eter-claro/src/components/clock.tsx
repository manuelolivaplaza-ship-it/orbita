"use client";

import { useEffect, useState } from "react";

function formatSantiago(date: Date) {
  return new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export function Clock({ className }: { className?: string }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => setTime(formatSantiago(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <p className={className ?? "mt-6 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gris"}>
      Santiago · {time}
    </p>
  );
}
