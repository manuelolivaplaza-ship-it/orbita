import { site } from "@/data/site";

export function WhatsApp() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-line bg-cream/90 px-4 py-2.5 text-[0.68rem] tracking-[0.16em] uppercase text-ink no-underline shadow-[0_10px_40px_-24px_rgba(27,29,26,0.5)] backdrop-blur-md"
      aria-label="Escribir por WhatsApp"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-sage" />
      Escribir
    </a>
  );
}
