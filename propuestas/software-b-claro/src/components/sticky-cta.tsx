"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function StickyCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/contacto")) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Link href="/contacto" className="btn btn-ink shadow-[0_8px_24px_rgba(23,25,22,0.18)]">
        Levantamiento
      </Link>
    </div>
  );
}
