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
        "fixed inset-x-0 bottom-0 z-40 border-t border-linea bg-papel/95 p-3 backdrop-blur-md transition-transform duration-300 lg:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex gap-2">
        <Link href="/admision" className="btn btn-ink flex-1">
          Postular 2027
        </Link>
        <a href={site.whatsappHref} className="btn btn-ghost flex-1">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
