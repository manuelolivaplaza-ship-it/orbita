import Link from "next/link";
import { Mark } from "@/components/logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-linea">
      <div className="frame py-16 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker">Próximo paso</p>
            <Link
              href="/contacto"
              className="display mt-4 block text-[clamp(2.8rem,8vw,6.2rem)] text-marfil transition-colors hover:text-limbo"
            >
              Pedir una
              <br />
              mira
            </Link>
          </div>
          <p className="max-w-xs text-[1.02rem] leading-relaxed text-niebla">
            Cuéntenos qué opera hoy y dónde se pierde el rumbo. No hace falta un
            brief perfecto. La mira se toma en terreno.
          </p>
        </div>

        <div className="mt-16 grid gap-10 border-t border-linea pt-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Mark className="h-7 w-7" />
              <span className="font-display text-2xl font-semibold tracking-[-0.04em]">
                Sextante
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-niebla">
              Estudio de software en el plan de Valparaíso. Primero la mira.
              Después el sistema.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-niebla">
              {site.note}
            </p>
          </div>
          <div>
            <p className="kicker">Taller</p>
            <ul className="mt-4 space-y-2 text-sm text-marfil-dim">
              <li>
                <Link href="/obra" className="link-line">
                  Obra
                </Link>
              </li>
              <li>
                <Link href="/oficio" className="link-line">
                  Oficio
                </Link>
              </li>
              <li>
                <Link href="/taller" className="link-line">
                  Taller
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="link-line">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker">Valparaíso</p>
            <address className="mt-4 space-y-2 text-sm not-italic text-marfil-dim">
              <p>{site.address.street}</p>
              <p>{site.metro}</p>
              <p>{site.coords.label}</p>
              <p>{site.hoursShort}</p>
              <p>
                <a href={site.phoneHref} className="link-line">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="link-line">
                  {site.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-linea pt-6 text-[0.78rem] text-niebla sm:flex-row sm:justify-between">
          <p>
            © {year} {site.legal} · RUT {site.rut}
          </p>
          <p className="flex gap-4">
            <Link href="/privacidad" className="link-line">
              Privacidad
            </Link>
            <a href={site.social.linkedin} className="link-line">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
