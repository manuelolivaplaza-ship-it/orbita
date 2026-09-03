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
  const vigil = hour >= 20 || hour < 9;
  return { time, vigil };
}

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
        <span className="tabular tracking-wide">—:— · Santiago</span>
      </p>
    );
  }

  const { time, vigil } = parts(now);

  return (
    <p className={className}>
      <span className="tabular tracking-wide">{time} · Santiago</span>
      <span className="text-muted">
        {vigil ? " · Estamos en vigilia." : " · La última hora es a las 20:00."}
      </span>
    </p>
  );
}
