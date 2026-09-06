"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export function StickyCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/contacto")) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 md:hidden">
      <Link href="/contacto" className="btn btn-primary min-h-12 text-[1rem]">
        Pedir una mira
      </Link>
      <a href={site.whatsappHref} className="btn btn-faro min-h-12 text-[1rem]">
        WhatsApp
      </a>
    </div>
  );
}
