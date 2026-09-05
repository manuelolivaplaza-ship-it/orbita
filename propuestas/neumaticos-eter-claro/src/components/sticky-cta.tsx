"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-4 py-3 backdrop-blur md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
      style={{ transition: "transform 0.45s var(--ease)" }}
    >
      <div className="flex gap-3">
        <Link href="/medida" className="btn btn-ink flex-1 text-[0.6rem]">
          Cotizar medida
        </Link>
        <a href={site.whatsappHref} className="btn btn-ghost flex-1 text-[0.6rem]">
          ¿Ponchada?
        </a>
      </div>
    </div>
  );
}
