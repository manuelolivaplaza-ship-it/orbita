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
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-mist/95 p-3 backdrop-blur-md transition-transform duration-300 lg:hidden",
        show ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex gap-2">
        <Link
          href="/consulta"
          className="font-ui flex h-12 flex-1 items-center justify-center bg-ether-deep text-[0.82rem] font-medium tracking-[0.12em] text-mist uppercase"
        >
          Consultar
        </Link>
        <a
          href={site.whatsapp}
          className="font-ui flex h-12 flex-1 items-center justify-center border border-ink text-[0.82rem] font-medium tracking-[0.12em] uppercase"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
