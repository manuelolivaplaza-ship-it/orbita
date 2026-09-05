import Link from "next/link";
import { Clock } from "@/components/clock";
import { Mark } from "@/components/mark";
import { Magnetic } from "@/components/magnetic";
import { nav, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-void">
      <div className="mx-auto max-w-[1600px] px-5 pt-20 pb-8 md:px-10 md:pt-28">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
              Siguiente conversación
            </p>
            <Magnetic strength={28}>
              <Link
                href="/contacto"
                className="mt-4 block font-display text-[clamp(3.2rem,10vw,9rem)] leading-[0.85] font-semibold tracking-tight text-ivory transition-colors duration-500 hover:text-gold"
              >
                Hablemos.
              </Link>
            </Magnetic>
            <p className="mt-6 max-w-md text-sm text-stone md:text-[15px]">
              Un correo. Una reunión de cuarenta minutos. Nada de decks de
              cuarenta páginas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
            <div>
              <p className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
                Estudio
              </p>
              <p className="mt-3 text-ivory">{site.address}</p>
              <p className="text-stone">{site.comuna}</p>
              <p className="mt-2 text-mute">{site.coords}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
                Contacto
              </p>
              <a
                href={`mailto:${site.email}`}
                className="link-line mt-3 block text-ivory"
              >
                {site.email}
              </a>
              <a href={site.phoneHref} className="link-line mt-1 block text-stone">
                {site.phone}
              </a>
              <a
                href={site.whatsapp}
                className="link-line mt-1 block text-stone"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
                Índice
              </p>
              <ul className="mt-3 space-y-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-line text-ivory">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-end justify-between gap-6 border-t border-line pt-6">
          <div className="flex items-center gap-3 text-gold">
            <Mark className="h-5 w-4" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">
              {site.legal} · desde {site.founded}
            </span>
          </div>
          <p className="hidden font-mono text-[10px] tracking-[0.18em] text-mute uppercase md:block">
            <Clock />
          </p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none mt-4 mb-[-0.18em] select-none px-2 text-center font-display text-[clamp(3.5rem,18vw,20rem)] leading-[0.75] font-extrabold tracking-[-0.04em] text-ivory/[0.045]"
      >
        OBSIDIANA
      </p>
    </footer>
  );
}
