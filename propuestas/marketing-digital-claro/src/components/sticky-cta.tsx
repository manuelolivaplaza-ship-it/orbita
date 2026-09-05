"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

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
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-luz/95 p-3 backdrop-blur-md transition-transform duration-300 lg:hidden",
        show ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex gap-2">
        <Link
          href="/contacto"
          className="flex h-12 flex-1 items-center justify-center bg-sol text-[0.9rem] font-semibold text-ink"
        >
          Pedir un brief
        </Link>
        <a
          href={site.whatsapp}
          className="flex h-12 flex-1 items-center justify-center border border-ink text-[0.9rem] font-semibold"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
