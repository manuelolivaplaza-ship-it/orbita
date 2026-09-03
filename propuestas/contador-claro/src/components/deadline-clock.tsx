"use client";

import { useEffect, useState } from "react";
import {
  daysUntil,
  formatShortDate,
  upcomingDeadlines,
  type Deadline,
} from "@/lib/calendar";

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

export function DeadlineClock() {
  const [now, setNow] = useState<{ time: string; open: boolean } | null>(null);
  const [next, setNext] = useState<Deadline | null>(null);
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const date = new Date();
      setNow(santiagoParts(date));
      const upcoming = upcomingDeadlines(date, 1)[0] ?? null;
      setNext(upcoming);
      setDays(upcoming ? daysUntil(upcoming.iso, date) : null);
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="text-[13px] leading-relaxed text-muted">
      <p className="flex items-center gap-2.5">
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{
            background: now?.open === false ? "var(--cobre)" : "var(--pino)",
          }}
          aria-hidden
        />
        <span className="nums tracking-wide text-ink">
          {now ? `Santiago ${now.time}` : "Santiago"}
        </span>
        <span aria-hidden>·</span>
        <span>
          {now
            ? now.open
              ? "La mesa está abierta"
              : "La mesa está cerrada"
            : "Lun–Vie 9:00–18:00"}
        </span>
      </p>
      {next ? (
        <p className="mt-3">
          <span className="kicker">Próximo</span>
          <span className="mt-1 block text-[15px] text-ink">
            {next.title}
            <span className="text-muted"> · {next.period}</span>
          </span>
          <span className="nums mt-0.5 block text-[13px]">
            {formatShortDate(next.iso)}
            {days !== null
              ? days === 0
                ? " · hoy"
                : days === 1
                  ? " · mañana"
                  : ` · ${days} días`
              : null}
          </span>
        </p>
      ) : null}
    </div>
  );
}
