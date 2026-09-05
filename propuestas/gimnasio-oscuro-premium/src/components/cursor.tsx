"use client";

import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -80, y: -80 });
  const [hover, setHover] = useState(false);
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!fine) return;

    const move = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest(
        "a, button, input, select, textarea, [data-cursor='hover']",
      );
      setHover(Boolean(interactive));
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [fine]);

  if (!fine) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[90] mix-blend-difference max-md:hidden"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className="rounded-full bg-ivory transition-[width,height,margin] duration-500 ease-out"
        style={{
          width: hover ? 44 : 8,
          height: hover ? 44 : 8,
          marginLeft: hover ? -22 : -4,
          marginTop: hover ? -22 : -4,
        }}
      />
    </div>
  );
}
