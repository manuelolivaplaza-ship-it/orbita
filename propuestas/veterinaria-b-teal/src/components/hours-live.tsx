"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function statusNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Santiago",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const t = hour * 60 + minute;

  const isSun = weekday === "Sun";
  const isSat = weekday === "Sat";
  const consultOpen = isSun
    ? false
    : isSat
      ? t >= 9 * 60 && t < 14 * 60
      : t >= 9 * 60 && t < 20 * 60;

  if (consultOpen) {
    const until = isSat ? "14:00" : "20:00";
    return {
      consult: true,
      label: `Consultas abiertas · hasta las ${until}`,
    };
  }

  return {
    consult: false,
    label: "Consultas cerradas · UCI y urgencias abiertas ahora",
  };
}

export function HoursLive({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const [label, setLabel] = useState("UCI y urgencias · 24 horas");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      const s = statusNow();
      setLabel(s.label);
      setOpen(s.consult);
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-[0.78rem]",
        onDark ? "text-primary-foreground/80" : "text-muted-foreground",
        className
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          open ? "bg-moss" : "bg-bark"
        )}
        aria-hidden
      />
      {label}
    </p>
  );
}
