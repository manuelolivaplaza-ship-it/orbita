"use client";

import { useEffect, useState } from "react";

type Light = {
  time: string;
  hour: number;
  minute: number;
  open: boolean;
  even: boolean;
};

function santiagoLight(date: Date): Light {
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
  const minute = Number(get("minute"));
  const weekday = get("weekday").replace(".", "").toLowerCase();
  const closedDays = ["sáb", "sab", "dom"];
  const open = !closedDays.includes(weekday) && hour >= 9 && hour < 19;
  const even = open && hour >= 10 && hour < 15;

  return {
    time: `${get("hour")}:${get("minute")}`,
    hour,
    minute,
    open,
    even,
  };
}

function tickLeft(hour: number, minute: number) {
  const start = 6;
  const end = 21;
  const now = hour + minute / 60;
  const clamped = Math.min(end, Math.max(start, now));
  return `${((clamped - start) / (end - start)) * 100}%`;
}

export function NorthMeter() {
  const [now, setNow] = useState<Light | null>(null);

  useEffect(() => {
    const tick = () => setNow(santiagoLight(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const status = !now
    ? "Lun–Vie 9:30–18:30"
    : !now.open
      ? "La casa está cerrada"
      : now.even
        ? "Luz pareja"
        : "Luz baja";

  return (
    <div className="max-w-sm">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-display nums text-[1.65rem] leading-none tracking-tight">
          {now ? now.time : "—:—"}
        </p>
        <p className="text-[12px] tracking-[0.14em] text-muted uppercase">
          Santiago
        </p>
      </div>

      <div className="relative mt-4 h-2">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-linea" />
        <div
          className="meter-fill absolute top-0 h-2"
          style={{ left: "26.6%", width: "33.3%" }}
          title="Luz pareja, 10:00 a 15:00"
        />
        {now ? (
          <span
            className="light-tick absolute top-1/2 h-2.5 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-tinta"
            style={{ left: tickLeft(now.hour, now.minute) }}
          />
        ) : null}
      </div>

      <div className="mt-2 flex justify-between text-[10px] tracking-[0.12em] text-muted uppercase">
        <span>06</span>
        <span className="text-norte">10–15</span>
        <span>21</span>
      </div>

      <p className="mt-3 text-[13px] text-muted">
        <span
          className="mr-2 inline-block h-1.5 w-1.5 rounded-full"
          style={{
            background: !now
              ? "var(--linea)"
              : now.even
                ? "var(--norte)"
                : now.open
                  ? "var(--cielo)"
                  : "var(--tinta)",
          }}
          aria-hidden
        />
        {status}
      </p>
    </div>
  );
}
