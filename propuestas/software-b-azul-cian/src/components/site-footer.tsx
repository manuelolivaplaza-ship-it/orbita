import Link from "next/link";
import { Mark } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line">
      <div className="shell py-16 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="caption">Siguiente paso</p>
            <Link
              href="/contacto"
              className="display mt-4 block text-[clamp(2.6rem,7vw,5.6rem)] text-tinta transition-colors duration-200 hover:text-cian-deep"
            >
              Pedir un
              <br />
              levantamiento
            </Link>
          </div>
          <p className="max-w-xs text-[1.02rem] leading-relaxed text-muted">
            Cuéntenos qué opera hoy y dónde se pierde el rastro. No hace falta
            un brief perfecto.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Mark className="h-7 w-7" />
              <span className="font-display text-2xl font-semibold tracking-[-0.04em]">
                Traza
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Estudio de software en Ñuñoa. Sistemas que se pueden seguir de
              punta a punta.
            </p>
          </div>
          <div>
            <p className="caption">Sitio</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-line">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contacto" className="link-line">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="caption">Ñuñoa</p>
            <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed">
              <p>{site.address.street}</p>
              <p>
                {site.address.commune}, {site.address.city}
              </p>
              <p>
                <a className="link-line" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>
                <a className="link-line" href={site.whatsappHref}>
                  WhatsApp
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 font-mono text-[0.68rem] tracking-[0.08em] text-muted uppercase md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legal} · Rut {site.rut}
          </p>
          <p>Hecho en Ñuñoa, con hora Santiago.</p>
          <Link href="/privacidad" className="link-line">
            Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
