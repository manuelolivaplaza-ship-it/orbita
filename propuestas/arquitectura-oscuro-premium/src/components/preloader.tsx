"use client";

import { useEffect, useState } from "react";
import { Mark } from "@/components/logo";

export function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHide(true), 2100);
    return () => window.clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div
      className="preloader fixed inset-0 z-[90] flex items-center justify-center bg-void text-paper"
      aria-hidden="true"
    >
      <div className="preloader-mark flex flex-col items-center gap-5">
        <Mark className="h-10 w-10 text-copper" />
        <p className="font-display text-4xl tracking-[0.32em]">ORILLA</p>
        <span className="preloader-line h-px w-28 bg-copper" />
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
          33°26′ S
        </p>
      </div>
    </div>
  );
}
