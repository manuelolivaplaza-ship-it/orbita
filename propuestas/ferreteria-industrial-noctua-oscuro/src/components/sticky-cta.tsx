"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

export function StickyCta() {
  const pathname = usePathname();
  if (pathname === "/cotizar") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-nave px-4 py-3 md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a href={site.whatsappHref} className="btn btn-ghost min-h-11 text-[0.58rem]">
          WhatsApp
        </a>
        <Link href="/cotizar" className="btn btn-sodium min-h-11 text-[0.58rem]">
          Cotizar
        </Link>
      </div>
    </div>
  );
}
