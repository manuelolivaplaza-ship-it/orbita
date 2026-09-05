"use client";

import { useEffect, useState } from "react";
import { naveAbierta, proximoCierre } from "@/lib/turno";
import { cn } from "@/lib/cn";

export function Lamp({ className }: { className?: string }) {
  const [open, setOpen] = useState<boolean | null>(null);
  const [cierre, setCierre] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setOpen(naveAbierta(now));
      setCierre(proximoCierre(now));
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (open === null) {
    return (
      <p className={cn("flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute", className)}>
        <span className="lamp" />
        Quilicura
      </p>
    );
  }

  return (
    <p
      className={cn(
        "flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.2em]",
        open ? "text-face" : "text-mute",
        className,
      )}
    >
      <span className="lamp" data-on={open} />
      {open ? `Nave abierta · hasta ${cierre}` : "Nave en silencio"}
    </p>
  );
}
