"use client";

import { useEffect, useState } from "react";

function parts() {
  const now = new Date();
  const fmt = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const dateFmt = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const hourFmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const hm = hourFmt.format(now);
  const [h, m] = hm.split(":").map(Number);
  const minutes = h * 60 + m;
  const reading = minutes >= 11 * 60 + 30 && minutes <= 14 * 60 + 30;
  return {
    time: fmt.format(now),
    date: dateFmt.format(now),
    reading,
  };
}

export function SolarClock() {
  const [state, setState] = useState<{
    time: string;
    date: string;
    reading: boolean;
  } | null>(null);

  useEffect(() => {
    const tick = () => setState(parts());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (!state) {
    return (
      <div className="border border-line bg-papel px-4 py-4">
        <p className="kicker">Santiago</p>
        <p className="font-display mt-2 text-3xl tracking-tight">—:—</p>
      </div>
    );
  }

  return (
    <div className="border border-line bg-papel px-4 py-4">
      <p className="kicker">Santiago · {state.date}</p>
      <p className="font-display nums mt-2 text-3xl tracking-tight">
        {state.time}
      </p>
      <p className="mt-2 max-w-[28ch] text-[13px] leading-relaxed text-muted">
        {state.reading
          ? "Ahora el solar se lee bien. El sol está alto."
          : "Fuera de hora de visita. El solar se lee entre 11:30 y 14:30."}
      </p>
    </div>
  );
}
