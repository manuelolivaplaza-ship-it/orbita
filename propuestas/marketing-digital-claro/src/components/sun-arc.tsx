"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function santiagoNow() {
  const now = new Date();
  const timeParts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const dateParts = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    weekday: "long",
    day: "numeric",
    month: "long",
  }).formatToParts(now);
  const get = (
    parts: Intl.DateTimeFormatPart[],
    type: Intl.DateTimeFormatPartTypes
  ) => parts.find((part) => part.type === type)?.value ?? "";
  const hour = Number(get(timeParts, "hour"));
  const minute = Number(get(timeParts, "minute"));
  const hh = String(hour).padStart(2, "0");
  const mm = String(minute).padStart(2, "0");
  return {
    hour,
    minute,
    label: `${hh}:${mm}`,
    date: `${get(dateParts, "weekday")} ${get(dateParts, "day")} de ${get(dateParts, "month")}`,
  };
}

function sunPosition(hour: number, minute: number) {
  const t = hour + minute / 60;
  const dawn = 6.5;
  const dusk = 20;
  if (t < dawn || t > dusk) return null;
  return (t - dawn) / (dusk - dawn);
}

export function SunArc({ className }: { className?: string }) {
  const [now, setNow] = useState(() => santiagoNow());

  useEffect(() => {
    const tick = () => setNow(santiagoNow());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const progress = sunPosition(now.hour, now.minute);
  const night = progress === null;
  const x = 16 + (night ? 0 : progress * 88);
  const y = night ? 28 : 28 - Math.sin(progress * Math.PI) * 22;

  return (
    <div className={cn("select-none", className)}>
      <p className="kicker">Luz de Santiago</p>
      <svg
        viewBox="0 0 120 40"
        className="mt-3 w-full"
        role="img"
        aria-label={
          night
            ? "Noche en Santiago. El faro sigue prendido."
            : `Sol de Santiago a las ${now.label}`
        }
      >
        <path
          d="M12 30 A 48 26 0 0 1 108 30"
          fill="none"
          stroke="var(--line)"
          strokeWidth="1.2"
        />
        <circle
          cx={x}
          cy={y}
          r="4.2"
          fill="var(--sol)"
          className="sun-dot"
        />
        <text
          x="12"
          y="38"
          fill="var(--muted)"
          fontSize="6.5"
          fontFamily="Outfit, sans-serif"
        >
          06:30
        </text>
        <text
          x="96"
          y="38"
          fill="var(--muted)"
          fontSize="6.5"
          fontFamily="Outfit, sans-serif"
        >
          20:00
        </text>
      </svg>
      <p className="font-display mt-2 text-[1.65rem] font-medium tracking-tight nums">
        {now.label}
      </p>
      <p className="mt-1 text-[13px] capitalize text-muted">{now.date}</p>
      <p className="mt-2 max-w-[28ch] text-[13px] leading-relaxed text-muted">
        {night
          ? "Noche en Santiago. El faro sigue prendido."
          : "Mientras haya luz, hay señal."}
      </p>
    </div>
  );
}
