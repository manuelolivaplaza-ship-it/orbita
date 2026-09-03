import { site } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-hueso text-carbon lg:hidden">
      <div className="grid grid-cols-2">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center py-3.5 text-[0.72rem] tracking-[0.14em] uppercase"
        >
          Llamar
        </a>
        <a
          href="/agenda"
          className="flex items-center justify-center bg-carbon py-3.5 text-[0.72rem] tracking-[0.14em] text-hueso uppercase"
        >
          Agendar evaluación
        </a>
      </div>
    </div>
  );
}
