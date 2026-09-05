import Link from "next/link";
import { Mark } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg">
      <div className="px-5 pt-20 pb-10 md:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Mark className="h-8 w-8" />
              <span className="font-serif text-2xl tracking-[0.22em]">
                OBSIDIANA
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-ivory-soft">
              Club de entrenamiento privado en Vitacura. Piedra, cobre y
              silencio. Ciento ochenta socios. Ninguna pantalla.
            </p>
            <a
              href={site.whatsapp}
              className="mt-8 inline-flex font-mono text-[0.62rem] tracking-[0.28em] text-copper uppercase link-line"
              target="_blank"
              rel="noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="font-mono text-[0.58rem] tracking-[0.32em] text-muted uppercase">
                Recinto
              </p>
              <ul className="mt-5 space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-ivory-soft transition-colors hover:text-ivory"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/visita"
                    className="text-ivory-soft transition-colors hover:text-ivory"
                  >
                    Reservar visita
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[0.58rem] tracking-[0.32em] text-muted uppercase">
                Visita
              </p>
              <ul className="mt-5 space-y-3 text-ivory-soft">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    <span className="block text-ivory">{h.days}</span>
                    <span className="font-mono text-sm tracking-wide">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[0.58rem] tracking-[0.32em] text-muted uppercase">
                Dirección
              </p>
              <address className="mt-5 not-italic text-ivory-soft">
                {site.address}
                <br />
                {site.comuna}, Santiago
                <br />
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 block text-ivory hover:text-copper"
                >
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="mt-1 block font-mono tracking-wide text-ivory hover:text-copper"
                >
                  {site.phoneDisplay}
                </a>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden">
          <p className="font-serif text-[18vw] leading-[0.8] font-medium tracking-tight text-ivory/[0.04] select-none md:text-[14vw]">
            OBSIDIANA
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 text-[0.72rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Obsidiana Club SpA. Vitacura, Chile.</p>
          <p className="font-mono tracking-[0.22em] uppercase">
            33°23′S · 70°35′W
          </p>
        </div>
      </div>
    </footer>
  );
}
