"use client";

import { useEffect, useState } from "react";

function parts(date: Date) {
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "America/Santiago",
      hour: "2-digit",
      hour12: false,
    }).format(date),
  );

  const time = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  let moment = "noche";
  if (hour >= 6 && hour < 8) moment = "amanecer";
  else if (hour >= 8 && hour < 12) moment = "mañana";
  else if (hour >= 12 && hour < 14) moment = "mediodía";
  else if (hour >= 14 && hour < 19) moment = "tarde";
  else if (hour >= 19 && hour < 21) moment = "atardecer";

  return { time, moment };
}

export function SantiagoClock({ className }: { className?: string }) {
  const [now, setNow] = useState<{ time: string; moment: string } | null>(null);

  useEffect(() => {
    const tick = () => setNow(parts(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      Santiago · {now ? `${now.time} · ${now.moment}` : "hora local"}
    </span>
  );
}
