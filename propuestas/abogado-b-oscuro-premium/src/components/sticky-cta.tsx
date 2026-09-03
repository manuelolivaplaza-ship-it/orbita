import { site } from "@/lib/site";
import Link from "next/link";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-void/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2">
        <a
          href={site.whatsapp}
          className="flex h-14 items-center justify-center border-r border-line text-[0.68rem] font-medium uppercase tracking-[0.16em] text-paper"
        >
          WhatsApp
        </a>
        <Link
          href="/primera-hora"
          className="flex h-14 items-center justify-center bg-copper text-[0.68rem] font-medium uppercase tracking-[0.16em] text-void"
        >
          Primera hora
        </Link>
      </div>
    </div>
  );
}
