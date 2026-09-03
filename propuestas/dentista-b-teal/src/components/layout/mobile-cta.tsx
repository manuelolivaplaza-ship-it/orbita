import { Calendar, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3 gap-1">
        <a
          href={site.phoneHref}
          className="flex flex-col items-center gap-1 rounded-xl py-2 text-[0.68rem] tracking-wide text-foreground"
        >
          <Phone className="size-4 text-primary" />
          Llamar
        </a>
        <a
          href={site.whatsapp}
          className="flex flex-col items-center gap-1 rounded-xl py-2 text-[0.68rem] tracking-wide text-foreground"
        >
          <MessageCircle className="size-4 text-primary" />
          WhatsApp
        </a>
        <a
          href="/primera-hora"
          className="flex flex-col items-center gap-1 rounded-xl bg-primary py-2 text-[0.68rem] tracking-wide text-primary-foreground"
        >
          <Calendar className="size-4" />
          Hora
        </a>
      </div>
    </div>
  );
}
