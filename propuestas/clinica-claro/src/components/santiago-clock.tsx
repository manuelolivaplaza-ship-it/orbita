"use client";

import { useEffect, useState } from "react";

function partsInSantiago(date: Date) {
  const fmt = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const bag = Object.fromEntries(
    fmt.formatToParts(date).map((part) => [part.type, part.value])
  );
  const hour = Number(bag.hour);
  const minute = Number(bag.minute);
  const weekday = bag.weekday?.replace(".", "") ?? "";
  return { hour, minute, weekday, label: `${bag.hour}:${bag.minute}` };
}

function statusFrom(hour: number, weekday: string) {
  const sun = weekday.startsWith("dom");
  const sat = weekday.startsWith("sáb") || weekday.startsWith("sab");
  if (sun) return { open: false, text: "Cerrado · domingo" };
  if (sat) {
    if (hour >= 9 && hour < 13) return { open: true, text: "Laboratorio y controles" };
    return { open: false, text: "Cerrado · sábado desde las 13:00" };
  }
  const friday = weekday.startsWith("vie");
  const close = friday ? 17 : 19;
  if (hour >= 8 && hour < close) return { open: true, text: "Consultas en curso" };
  if (hour >= 7 && hour < 8) return { open: false, text: "Abrimos a las 8:00" };
  return { open: false, text: "Cerrado · WhatsApp hábil" };
}

export function SantiagoClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!now) {
    return (
      <div className="text-[13px] tracking-wide text-muted">
        Santiago · —
      </div>
    );
  }

  const { hour, weekday, label } = partsInSantiago(now);
  const status = statusFrom(hour, weekday);

  return (
    <div>
      <p className="font-sans text-[11px] font-semibold tracking-[0.2em] text-sol uppercase">
        Santiago
      </p>
      <p className="font-display nums mt-1 text-[2.4rem] leading-none tracking-tight">
        {label}
      </p>
      <p className="mt-2 flex items-center gap-2 text-[13px] text-muted">
        <span
          aria-hidden
          className={`inline-block h-1.5 w-1.5 rounded-full ${
            status.open ? "bg-hoja" : "bg-sol/70"
          }`}
        />
        {status.text}
      </p>
    </div>
  );
}
