import { waLink } from "@/lib/format";

export function WhatsApp() {
  const href = waLink(
    "Hola NOCTUA, quiero consultar por una medida / agendar montaje.",
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex h-12 items-center gap-3 border border-line bg-bg/80 px-4 backdrop-blur-md transition-colors hover:border-amber hover:text-amber-2 sm:right-6 sm:bottom-6"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-amber" />
      <span className="kicker text-ink">WhatsApp</span>
    </a>
  );
}
