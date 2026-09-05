import Link from "next/link";
import { Mark } from "@/components/logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto border-t border-line">
      <div className="sheet py-16 md:py-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker">Próximo paso</p>
            <Link
              href="/contacto"
              className="display mt-4 block text-[clamp(3rem,8vw,6.6rem)] text-ink transition-colors hover:text-norte"
            >
              Pedir un
              <br />
              levantamiento
            </Link>
          </div>
          <p className="max-w-xs text-[1.02rem] leading-relaxed text-muted">
            Cuéntanos qué opera hoy y dónde se pierde el rumbo. No hace falta un
            brief perfecto. Si el eje no está claro, lo buscamos juntos.
          </p>
        </div>

        <div className="titleblock mt-16 md:mt-20">
          <div>
            <p>Proyecto</p>
            <p className="mt-1 text-ink">Meridiano · taller de software</p>
          </div>
          <div className="cell-r">
            <p>Lámina</p>
            <p className="mt-1 text-ink">Pie de plano</p>
          </div>
          <div className="border-t border-line">
            <p>Ubicación</p>
            <p className="mt-1 text-ink">
              {site.address.street} · {site.address.commune}
            </p>
          </div>
          <div className="cell-r border-t border-line">
            <p>Coordenadas</p>
            <p className="mt-1 text-ink">{site.coords.label}</p>
          </div>
          <div className="border-t border-line">
            <p>Escala</p>
            <p className="mt-1 text-ink">1 : 1</p>
          </div>
          <div className="cell-r border-t border-line">
            <p>Fecha</p>
            <p className="mt-1 text-ink">{year}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Mark className="h-7 w-7" />
              <span className="font-display text-2xl font-semibold tracking-[-0.04em]">
                Meridiano
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Taller de software en Providencia. Sistemas de operación con un
              eje escrito, luz norte y bitácora.
            </p>
          </div>
          <div>
            <p className="kicker">Plano</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/obra" className="link-n">
                  Obra
                </Link>
              </li>
              <li>
                <Link href="/oficio" className="link-n">
                  Oficio
                </Link>
              </li>
              <li>
                <Link href="/taller" className="link-n">
                  Taller
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="link-n">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker">Providencia</p>
            <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed">
              <p>{site.address.street}</p>
              <p>
                {site.address.commune}, {site.address.city}
              </p>
              <p>
                <a className="link-n" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>
                <a className="link-n" href={site.whatsappHref}>
                  WhatsApp
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 font-mono text-[0.68rem] tracking-[0.08em] uppercase text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legal} · Rut {site.rut}
          </p>
          <p>Hecho en Santiago, a plena luz norte.</p>
          <Link href="/privacidad" className="link-n">
            Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
