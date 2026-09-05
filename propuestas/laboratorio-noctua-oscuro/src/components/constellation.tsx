"use client";

import Link from "next/link";
import { useState } from "react";
import { constellation } from "@/data/content";
import { examenes } from "@/data/examenes";
import { cn } from "@/lib/cn";

const lines: Array<[string, string]> = [
  ["hem", "bio"],
  ["bio", "hor"],
  ["hem", "vit"],
  ["vit", "ori"],
  ["ori", "inf"],
  ["hor", "inf"],
  ["vit", "pre"],
  ["hem", "pre"],
];

function star(id: string) {
  return constellation.find((item) => item.id === id)!;
}

export function Constellation() {
  const [active, setActive] = useState<string | null>("bio");
  const current = constellation.find((item) => item.id === active) ?? constellation[1];
  const count = examenes.filter((item) => item.categoria === current.categoria).length;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-12">
      <svg
        viewBox="0 0 100 100"
        className="lg:col-span-8 h-auto w-full"
        role="img"
        aria-label="Constelación de exámenes del laboratorio"
      >
        {lines.map(([a, b]) => {
          const from = star(a);
          const to = star(b);
          const on = a === active || b === active;
          return (
            <line
              key={`${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={on ? "var(--amber)" : "var(--line)"}
              strokeWidth={on ? 0.35 : 0.2}
              opacity={on ? 0.9 : 0.7}
            />
          );
        })}
        {constellation.map((item, index) => {
          const on = item.id === active;
          return (
            <g key={item.id}>
              <circle
                cx={item.x}
                cy={item.y}
                r={item.r + 4}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setActive(item.id)}
                onFocus={() => setActive(item.id)}
                onClick={() => setActive(item.id)}
              />
              <circle
                cx={item.x}
                cy={item.y}
                r={item.r}
                fill={on ? "var(--amber)" : "var(--paper)"}
                className="star-core pointer-events-none"
                style={{ animationDelay: `${index * 0.4}s` }}
              />
              <text
                x={item.x}
                y={item.y + item.r + 6}
                textAnchor="middle"
                fill={on ? "var(--amber)" : "var(--muted)"}
                fontSize="3.2"
                fontFamily="IBM Plex Mono, monospace"
                letterSpacing="0.18em"
                className="pointer-events-none uppercase"
              >
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="lg:col-span-4">
        <p className="kicker">Constelación</p>
        <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight">
          {current.label}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-paper-dim">
          {count} exámenes en el catálogo. Pasa el cursor —o el dedo— sobre una
          estrella. Lo que se enciende es lo que leemos de noche.
        </p>
        <Link
          href={`/examenes?cat=${encodeURIComponent(current.categoria)}`}
          className={cn(
            "link-line mt-6 inline-flex font-mono text-[0.62rem] uppercase tracking-[0.28em]",
          )}
        >
          Ver {current.label.toLowerCase()}
        </Link>
      </div>
    </div>
  );
}
