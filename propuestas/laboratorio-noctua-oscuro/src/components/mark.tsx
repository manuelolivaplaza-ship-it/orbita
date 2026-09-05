"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

export function Mark({
  className,
  follow = false,
}: {
  className?: string;
  follow?: boolean;
}) {
  const left = useRef<SVGCircleElement>(null);
  const right = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!follow) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const onMove = (event: PointerEvent) => {
      const nx = (event.clientX / window.innerWidth - 0.5) * 1.6;
      const ny = (event.clientY / window.innerHeight - 0.5) * 1.4;
      const transform = `translate(${nx}px, ${ny}px)`;
      if (left.current) left.current.style.transform = transform;
      if (right.current) right.current.style.transform = transform;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [follow]);

  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <circle
        cx="16"
        cy="16.6"
        r="10.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle
        cx="12.15"
        cy="15.1"
        r="3.15"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle
        ref={left}
        cx="12.15"
        cy="15.1"
        r="1.05"
        className="owl-pupil"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <circle
        cx="19.85"
        cy="15.1"
        r="3.15"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle
        ref={right}
        cx="19.85"
        cy="15.1"
        r="1.05"
        className="owl-pupil"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <path d="M16 18.15 14.55 21.35h2.9Z" fill="currentColor" />
    </svg>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function Drop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      aria-hidden="true"
      className={cn("drop-fall h-8 w-6", className)}
    >
      <path
        d="M12 2C12 2 4 14 4 20a8 8 0 0 0 16 0C20 14 12 2 12 2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="12" cy="21" r="2.2" className="owl-pupil" />
    </svg>
  );
}
