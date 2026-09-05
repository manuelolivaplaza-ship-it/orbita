import Link from "next/link";
import { studio } from "@/lib/studio";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-void/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2">
        <a
          href={studio.whatsapp}
          className="flex h-14 items-center justify-center font-mono text-[11px] uppercase tracking-[0.18em] text-paper-dim"
        >
          WhatsApp
        </a>
        <Link
          href="/contacto"
          className="flex h-14 items-center justify-center bg-copper font-mono text-[11px] uppercase tracking-[0.18em] text-void"
        >
          Encargo
        </Link>
      </div>
    </div>
  );
}
