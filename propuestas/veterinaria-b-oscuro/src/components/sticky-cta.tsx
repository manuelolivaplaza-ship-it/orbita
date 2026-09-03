import Link from "next/link";
import { site } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-void/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2">
        <a
          href={site.whatsappUrgencia}
          className="flex h-14 items-center justify-center border-r border-line text-[0.68rem] font-medium uppercase tracking-[0.16em] text-paper"
        >
          Guardia
        </a>
        <Link
          href="/hora"
          className="flex h-14 items-center justify-center bg-lantern text-[0.68rem] font-medium uppercase tracking-[0.16em] text-void"
        >
          Pedir hora
        </Link>
      </div>
    </div>
  );
}
