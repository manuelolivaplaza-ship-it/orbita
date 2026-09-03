"use client";

import { useEffect, useState } from "react";
import { Mark } from "./mark";

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("obsidiana-in");
    if (seen) {
      setShow(false);
      return;
    }
    sessionStorage.setItem("obsidiana-in", "1");
    const t = window.setTimeout(() => setShow(false), 3000);
    return () => window.clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="preloader" aria-hidden="true">
      <div className="flex flex-col items-center gap-7">
        <Mark className="preloader-mark h-16 w-12" />
        <p className="preloader-word">
          <span className="font-mono text-[11px] tracking-[0.48em] text-ivory">
            OBSIDIANA
          </span>
        </p>
        <div className="preloader-line h-px w-24" />
      </div>
    </div>
  );
}
