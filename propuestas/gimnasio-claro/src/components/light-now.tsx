"use client";

import { useSyncExternalStore } from "react";

function readingForHour(hour: number) {
  if (hour >= 5 && hour < 9) {
    return {
      label: "Amanecer",
      text: "La sala de fuerza ya está abierta. El valle todavía tiene sombra.",
    };
  }
  if (hour >= 9 && hour < 12) {
    return {
      label: "Luz alta",
      text: "Reforma y condición. El salón está en su hora más clara.",
    };
  }
  if (hour >= 12 && hour < 16) {
    return {
      label: "Mediodía",
      text: "La terraza pide aire. Un espresso y un bloque de 45.",
    };
  }
  if (hour >= 16 && hour < 20) {
    return {
      label: "Tarde de cobre",
      text: "Las clases se llenan. Reserva si vienes después de las 18.",
    };
  }
  if (hour >= 20 && hour < 22) {
    return {
      label: "Última luz",
      text: "Cierre suave: Tierra, Frío y el camino de vuelta al auto.",
    };
  }
  return {
    label: "El club duerme",
    text: "Mañana se abre a las 5:45. Descansa.",
  };
}

type LightReading = {
  label: string;
  text: string;
  clock: string;
};

function getReading(): LightReading {
  const parts = new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 8);
  const minute = parts.find((p) => p.type === "minute")?.value ?? "00";
  return {
    ...readingForHour(hour),
    clock: `${String(hour).padStart(2, "0")}:${minute}`,
  };
}

function subscribe(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 30_000);
  return () => window.clearInterval(id);
}

const fallback: LightReading = {
  ...readingForHour(8),
  clock: "—",
};

export function LightNow() {
  const reading = useSyncExternalStore(subscribe, getReading, () => fallback);

  return (
    <div className="flex flex-col gap-2 border-l-2 border-copper pl-5">
      <p className="kicker">Luz de Santiago · {reading.clock}</p>
      <p className="font-display text-2xl tracking-tight">{reading.label}</p>
      <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
        {reading.text}
      </p>
    </div>
  );
}
