"use client";

import { useState } from "react";
import { parcels } from "@/lib/parcels";
import { meters, num } from "@/lib/format";
import { cn } from "@/lib/cn";

const shapes: Record<string, string> = {
  strix: "M 18 58 L 42 46 L 48 68 L 22 78 Z",
  umbra: "M 40 22 L 62 14 L 70 36 L 46 46 Z",
  alba: "M 8 72 L 36 78 L 32 94 L 6 90 Z",
  nyctea: "M 58 48 L 82 42 L 88 62 L 62 70 Z",
};

export function ParcelMap() {
  const [active, setActive] = useState(parcels[1].id);
  const current = parcels.find((p) => p.id === active) ?? parcels[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <svg viewBox="0 0 100 100" className="w-full text-bone">
        <rect width="100" height="100" fill="#0b0d12" />
        <path
          d="M 0 18 Q 30 8 55 22 T 100 16 L 100 0 L 0 0 Z"
          fill="#12151c"
        />
        <path
          d="M 0 100 L 0 70 Q 20 62 40 74 T 100 68 L 100 100 Z"
          fill="#12151c"
        />
        <path
          d="M 48 0 L 52 100"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeDasharray="1 2"
        />
        {parcels.map((parcel) => (
          <path
            key={parcel.id}
            d={shapes[parcel.id]}
            fill={active === parcel.id ? "#b8956a" : "transparent"}
            fillOpacity={active === parcel.id ? 0.18 : 0}
            stroke={active === parcel.id ? "#b8956a" : "#e7dfd1"}
            strokeOpacity={active === parcel.id ? 1 : 0.35}
            strokeWidth="0.6"
            className="cursor-pointer transition"
            onMouseEnter={() => setActive(parcel.id)}
            onClick={() => setActive(parcel.id)}
          />
        ))}
        {parcels.map((parcel) => {
          const [x, y] = centroid(shapes[parcel.id]);
          return (
            <text
              key={`${parcel.id}-label`}
              x={x}
              y={y}
              textAnchor="middle"
              className="cursor-pointer"
              fill={active === parcel.id ? "#b8956a" : "#cfc6b6"}
              fontSize="3.2"
              letterSpacing="0.18em"
              onMouseEnter={() => setActive(parcel.id)}
              onClick={() => setActive(parcel.id)}
            >
              {parcel.name.toUpperCase()}
            </text>
          );
        })}
      </svg>

      <div>
        <p className="kicker">Parcela activa</p>
        <h3 className="mt-3 font-display text-5xl font-light">{current.name}</h3>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-parchment">
          {current.note}
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-4">
          {[
            ["Altitud", meters(current.altitude)],
            ["Superficie", `${num(current.hectares, 1)} ha`],
            ["Exposición", current.aspect],
            ["Cepas", current.grapes],
            ["Suelo", current.soil],
          ].map(([label, value]) => (
            <div key={label} className={cn(label === "Suelo" && "col-span-2")}>
              <dt className="kicker">{label}</dt>
              <dd className="mt-1 text-sm">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function centroid(d: string) {
  const nums = d.match(/-?\d+(\.\d+)?/g)?.map(Number) ?? [];
  const pts: number[][] = [];
  for (let i = 0; i < nums.length; i += 2) pts.push([nums[i], nums[i + 1]]);
  const x = pts.reduce((s, p) => s + p[0], 0) / pts.length;
  const y = pts.reduce((s, p) => s + p[1], 0) / pts.length;
  return [x, y + 1.2];
}
