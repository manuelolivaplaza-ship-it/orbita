"use client";

import Link from "next/link";
import { useState } from "react";
import { constellationLinks, specialties } from "@/data/content";
import { cn } from "@/lib/cn";

const fieldStars = [
  [28, 36],
  [52, 88],
  [74, 24],
  [110, 18],
  [148, 30],
  [188, 22],
  [220, 44],
  [268, 28],
  [292, 72],
  [40, 160],
  [300, 168],
  [18, 240],
  [48, 292],
  [280, 248],
  [302, 300],
  [160, 318],
] as const;

export function Observatory() {
  const [active, setActive] = useState<string>("medicina-del-sueno");
  const current =
    specialties.find((item) => item.slug === active) ?? specialties[1];

  const bySlug = Object.fromEntries(
    specialties.map((item) => [item.slug, item]),
  );

  return (
    <div className="grid items-center gap-10 lg:grid-cols-12">
      <div className="relative lg:col-span-8">
        <svg
          viewBox="0 0 320 340"
          role="img"
          aria-label="Constelación NOCTUA: ocho especialidades como estrellas"
          className="h-auto w-full"
        >
          {fieldStars.map(([x, y], index) => (
            <circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r={index % 3 === 0 ? 0.9 : 0.55}
              fill="currentColor"
              className="text-paper/25"
            />
          ))}

          {constellationLinks.map(([a, b]) => {
            const from = bySlug[a];
            const to = bySlug[b];
            if (!from || !to) return null;
            const lit = active === a || active === b;
            return (
              <line
                key={`${a}-${b}`}
                x1={from.star.x}
                y1={from.star.y}
                x2={to.star.x}
                y2={to.star.y}
                stroke={lit ? "var(--amber)" : "var(--line)"}
                strokeWidth={lit ? 0.9 : 0.6}
              />
            );
          })}

          {specialties.map((item) => {
            const isActive = item.slug === active;
            return (
              <g
                key={item.slug}
                className={cn("star-hit", isActive && "is-active")}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                aria-label={item.title}
                onMouseEnter={() => setActive(item.slug)}
                onFocus={() => setActive(item.slug)}
                onClick={() => setActive(item.slug)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActive(item.slug);
                  }
                }}
              >
                <circle
                  className="star-ring"
                  cx={item.star.x}
                  cy={item.star.y}
                  r="14"
                />
                <circle
                  className={cn("star-dot", isActive && "star-core")}
                  cx={item.star.x}
                  cy={item.star.y}
                  r={isActive ? 3.4 : 2.4}
                />
                <text
                  className="star-label"
                  x={item.star.x}
                  y={item.star.y + 22}
                  textAnchor="middle"
                  fontSize="7"
                  letterSpacing="0.18em"
                  style={{ fontFamily: "IBM Plex Mono, ui-monospace, monospace" }}
                >
                  {item.n} {item.title.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="lg:col-span-4">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
          {current.n} · {current.room}
        </p>
        <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight">
          {current.title}
        </h3>
        <p className="mt-5 text-sm leading-relaxed text-paper-dim">
          {current.lead}
        </p>
        <Link
          href={`/especialidades/${current.slug}`}
          className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
        >
          Entrar a la sala
        </Link>
      </div>
    </div>
  );
}
