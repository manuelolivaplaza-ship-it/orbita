"use client";

import { useEffect, useState } from "react";
import { santiagoParts } from "@/lib/night";

const SIZE = 420;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 168;

function polar(hour: number, radius = R) {
  const angle = (hour / 24) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CX + Math.cos(angle) * radius,
    y: CY + Math.sin(angle) * radius,
  };
}

function arcPath(from: number, to: number, radius = R) {
  const start = polar(from, radius);
  const end = polar(to, radius);
  const delta = (to - from + 24) % 24;
  const large = delta > 12 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${large} 1 ${end.x} ${end.y}`;
}

const ticks = Array.from({ length: 24 }, (_, hour) => hour);

const labels = [
  { hour: 0, text: "00" },
  { hour: 6, text: "06" },
  { hour: 12, text: "12" },
  { hour: 18, text: "18" },
];

export function NightCycle() {
  const [now, setNow] = useState<{ hour: number; label: string } | null>(null);

  useEffect(() => {
    const tick = () => {
      const { hour, minute, time } = santiagoParts();
      setNow({ hour: hour + minute / 60, label: time });
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const hand = now === null ? null : polar(now.hour, R - 8);
  const hub = polar(now?.hour ?? 0, 0);

  return (
    <figure className="relative mx-auto max-w-[420px]">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-auto w-full"
        role="img"
        aria-label="Ciclo de 24 horas del laboratorio: toma al amanecer y al ocaso, procesamiento de noche."
      >
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="var(--line)"
          strokeWidth="1"
        />
        <path
          d={arcPath(6.5, 12)}
          fill="none"
          stroke="var(--paper)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d={arcPath(16, 21)}
          fill="none"
          stroke="var(--paper)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d={arcPath(18, 30)}
          fill="none"
          stroke="var(--amber)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {ticks.map((hour) => {
          const outer = polar(hour, R + 8);
          const inner = polar(hour, hour % 6 === 0 ? R - 14 : R - 7);
          return (
            <line
              key={hour}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke={hour % 6 === 0 ? "var(--paper-dim)" : "var(--line)"}
              strokeWidth={hour % 6 === 0 ? 1.2 : 0.7}
            />
          );
        })}

        {labels.map((item) => {
          const p = polar(item.hour, R + 28);
          return (
            <text
              key={item.hour}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--muted)"
              fontSize="11"
              fontFamily="IBM Plex Mono, monospace"
              letterSpacing="0.18em"
            >
              {item.text}
            </text>
          );
        })}

        {hand ? (
          <>
            <line
              x1={hub.x}
              y1={hub.y}
              x2={hand.x}
              y2={hand.y}
              stroke="var(--amber)"
              strokeWidth="1.4"
            />
            <circle cx={hand.x} cy={hand.y} r="4.2" fill="var(--amber)" />
          </>
        ) : null}

        <circle cx={CX} cy={CY} r="3" fill="var(--paper)" />

        <text
          x={CX}
          y={CY - 22}
          textAnchor="middle"
          fill="var(--amber)"
          fontSize="10"
          fontFamily="IBM Plex Mono, monospace"
          letterSpacing="0.32em"
        >
          TURNO
        </text>
        <text
          x={CX}
          y={CY + 8}
          textAnchor="middle"
          fill="var(--paper)"
          fontSize="22"
          fontFamily="Syne, sans-serif"
        >
          {now?.label ?? "—"}
        </text>
        <text
          x={CX}
          y={CY + 32}
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="10"
          fontFamily="IBM Plex Mono, monospace"
          letterSpacing="0.22em"
        >
          SANTIAGO
        </text>
      </svg>
      <figcaption className="mt-8 grid gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted sm:grid-cols-3">
        <p>
          <span className="mr-2 inline-block h-1.5 w-4 bg-paper/40 align-middle" />
          Toma 06:30–12:00
        </p>
        <p>
          <span className="mr-2 inline-block h-1.5 w-4 bg-paper/40 align-middle" />
          Toma 16:00–21:00
        </p>
        <p>
          <span className="mr-2 inline-block h-px w-4 bg-amber align-middle" />
          Procesa 18:00–07:00
        </p>
      </figcaption>
    </figure>
  );
}
