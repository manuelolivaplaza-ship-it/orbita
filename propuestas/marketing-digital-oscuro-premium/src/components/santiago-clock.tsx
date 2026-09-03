"use client";

import { useEffect, useState } from "react";

function parts(date: Date) {
  const fmt = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const hourFmt = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    hourCycle: "h23",
  });
  const time = fmt.format(date);
  const hour = Number.parseInt(hourFmt.format(date), 10);
  let note = " · La mesa está abierta.";
  if (hour >= 19 || hour < 9) {
    note =
      hour >= 22 || hour < 6
        ? " · El media, a veces, sigue."
        : hour >= 19
          ? " · La mesa cerró. El criterio, no."
          : " · La mesa abre a las 9:00.";
  }
  return { time, note };
}

export function SantiagoClock({ className = "" }: { className?: string }) {
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
        <span className="tabular tracking-wide">—:— · Santiago</span>
      </p>
    );
  }

  const { time, note } = parts(now);

  return (
    <p className={className}>
      <span className="tabular tracking-wide">{time} · Santiago</span>
      <span className="text-muted">{note}</span>
    </p>
  );
}
