"use client";

import { useEffect, useState } from "react";

function santiagoParts(date: Date) {
  const parts = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  const hour = Number(get("hour"));
  const weekday = get("weekday").replace(".", "").toLowerCase();
  const closedDays = ["sáb", "sab", "dom"];
  const open = !closedDays.includes(weekday) && hour >= 9 && hour < 18;

  return {
    time: `${get("hour")}:${get("minute")}`,
    open,
  };
}

export function PatioClock() {
  const [now, setNow] = useState<{ time: string; open: boolean } | null>(null);

  useEffect(() => {
    const tick = () => setNow(santiagoParts(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="flex items-center gap-2.5 text-[13px] text-muted">
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{
          background: now?.open === false ? "var(--barro)" : "var(--sage)",
        }}
        aria-hidden
      />
      <span className="font-display nums tracking-wide">
        {now ? `Santiago ${now.time}` : "Santiago"}
      </span>
      <span aria-hidden>·</span>
      <span>
        {now
          ? now.open
            ? "El patio está abierto"
            : "El patio está cerrado"
          : "Lun–Vie 9:00–18:00"}
      </span>
    </p>
  );
}
