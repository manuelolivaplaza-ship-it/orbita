"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export function StickyCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/contacto")) return null;

  return (
    <div className="fixed right-4 bottom-4 z-50 md:hidden">
      <a href={site.whatsappHref} className="btn btn-navy">
        WhatsApp
      </a>
    </div>
  );
}
