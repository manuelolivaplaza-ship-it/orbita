"use client";

import { useEffect, useState } from "react";
import { Mark } from "@/components/Logo";

export function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHide(true), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div
      className="preloader fixed inset-0 z-[90] flex items-center justify-center bg-ink text-paper"
      aria-hidden="true"
    >
      <div className="preloader-mark flex flex-col items-center gap-5">
        <Mark className="h-10 w-10" />
        <p className="font-display text-4xl tracking-[0.28em]">VETA</p>
        <span className="preloader-line h-px w-24 bg-paper/70" />
      </div>
    </div>
  );
}
