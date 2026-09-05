"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

function formatSantiago(date: Date) {
  return new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export function Altitude() {
  const [time, setTime] = useState<string>("—:—");

  useEffect(() => {
    const tick = () => setTime(formatSantiago(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <dl className="grid grid-cols-2 gap-6 text-sm">
      <div>
        <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
          Altura
        </dt>
        <dd className="font-display mt-2 text-3xl font-light nums tracking-tight">
          {site.altitude}
          <span className="text-xl"> m</span>
        </dd>
      </div>
      <div>
        <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
          El Arrayán
        </dt>
        <dd className="font-display mt-2 text-3xl font-light nums tracking-tight">
          {time}
        </dd>
      </div>
    </dl>
  );
}
