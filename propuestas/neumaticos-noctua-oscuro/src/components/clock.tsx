"use client";

import { useEffect, useState } from "react";

function stamp() {
  return new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

export function Clock() {
  const [time, setTime] = useState("—:—");

  useEffect(() => {
    const tick = () => setTime(stamp());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="num hidden items-center gap-2 text-[0.6875rem] tracking-[0.22em] text-mute uppercase lg:inline-flex">
      <span className="h-1.5 w-1.5 rounded-full bg-amber" style={{ animation: "pulse-dot 2.4s ease infinite" }} />
      SCL {time}
    </span>
  );
}
