import { MessageCircle } from "lucide-react";

import { site, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhatsAppButton({
  message = `Hola Olivo, quiero hablar con un corredor.`,
  className,
}: {
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir a ${site.name} por WhatsApp`}
      className={cn(
        "fixed right-5 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe5d] md:flex",
        className,
      )}
    >
      <MessageCircle className="size-7 fill-current" />
    </a>
  );
}
