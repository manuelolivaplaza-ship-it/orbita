"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

export function StickyCta() {
  const pathname = usePathname();
  if (pathname === "/cuenta") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/92 px-4 py-3 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a href={site.whatsappHref} className="btn btn-ghost min-h-11 text-[0.58rem]">
          WhatsApp
        </a>
        <Link href="/cuenta" className="btn btn-ink min-h-11 text-[0.58rem]">
          Abrir cuenta
        </Link>
      </div>
    </div>
  );
}
