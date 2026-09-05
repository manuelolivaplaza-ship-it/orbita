"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Magnetic({
  children,
  className,
  strength = 18,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={cn("inline-block will-change-transform", className)}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        if (!window.matchMedia("(pointer: fine)").matches) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
      }}
      onPointerLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "translate(0, 0)";
        el.style.transition = "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)";
        window.setTimeout(() => {
          if (el) el.style.transition = "";
        }, 550);
      }}
    >
      {children}
    </div>
  );
}
