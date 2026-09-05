"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { boneLines, joints } from "@/data/content";
import { cn } from "@/lib/cn";

export function BodyMap() {
  const [active, setActive] = useState<string>("cervical");

  const byId = useMemo(() => {
    const map = new Map<string, (typeof joints)[number]>();
    for (const joint of joints) map.set(joint.id, joint);
    return map;
  }, []);

  const current = joints.find((joint) => joint.id === active) ?? joints[1];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_220px]">
      <svg
        viewBox="0 0 200 440"
        role="img"
        aria-label="Constelación del cuerpo: cada articulación es una estrella"
        className="mx-auto h-auto w-full max-w-[280px] lg:max-w-none"
      >
        <title>Constelación del cuerpo</title>
        {boneLines.map(([a, b]) => {
          const from = byId.get(a);
          const to = byId.get(b);
          if (!from || !to) return null;
          const lit = active === a || active === b;
          return (
            <line
              key={`${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={lit ? "#e0b15a" : "#ece7dc"}
              strokeOpacity={lit ? 0.55 : 0.14}
              strokeWidth={lit ? 0.9 : 0.6}
            />
          );
        })}

        {joints.map((joint, index) => {
          const lit = joint.id === active;
          return (
            <g key={joint.id}>
              <circle
                cx={joint.x}
                cy={joint.y}
                r={lit ? 9 : 7}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setActive(joint.id)}
                onFocus={() => setActive(joint.id)}
                onClick={() => setActive(joint.id)}
              >
                <title>{joint.label}</title>
              </circle>
              <circle
                cx={joint.x}
                cy={joint.y}
                r={lit ? 2.6 : 1.7}
                fill={lit ? "#e0b15a" : "#ece7dc"}
                className={cn(!lit && index % 3 === 0 && "star-core")}
                style={
                  !lit && index % 3 === 0
                    ? { animationDelay: `${index * 0.35}s` }
                    : undefined
                }
                pointerEvents="none"
              />
              {lit ? (
                <circle
                  cx={joint.x}
                  cy={joint.y}
                  r="6.5"
                  fill="none"
                  stroke="#e0b15a"
                  strokeOpacity="0.45"
                  pointerEvents="none"
                />
              ) : null}
            </g>
          );
        })}
      </svg>

      <div className="min-h-[8.5rem]">
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.28em] text-muted">
          Constelación
        </p>
        <p className="mt-3 font-display text-4xl font-semibold tracking-tight">
          {current.label}
        </p>
        <Link
          href={current.href}
          className="link-line mt-5 inline-flex font-mono text-[0.62rem] uppercase tracking-[0.24em] text-amber"
        >
          Leer este oficio
        </Link>
        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-2">
          {["Cervical", "Hombro", "Lumbar", "Cadera", "Rodilla"].map((label) => {
            const joint = joints.find((item) => item.label === label);
            if (!joint) return null;
            return (
              <li key={label}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(joint.id)}
                  onFocus={() => setActive(joint.id)}
                  onClick={() => setActive(joint.id)}
                  className={cn(
                    "font-mono text-[0.58rem] uppercase tracking-[0.22em] transition-colors",
                    joint.id === active ? "text-amber" : "text-muted hover:text-paper",
                  )}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
