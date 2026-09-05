import Link from "next/link";
import { Logo } from "@/components/logo";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-void pb-20 md:pb-0">
      <div className="mx-auto grid max-w-[1480px] gap-14 px-5 py-20 md:grid-cols-12 md:px-10 lg:px-16">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-8 max-w-sm font-display text-4xl font-medium leading-[0.95] tracking-wide text-face">
            {site.tagline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mute">
            Nave en Quilicura. Corte a medida, stock rotulado, despacho de
            madrugada. El mesón abre a las 18:00.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-mute">
            Nave
          </p>
          <ul className="mt-5 space-y-3 text-sm text-steel">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="trace">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/cotizar" className="trace">
                Cotizar lista
              </Link>
            </li>
            <li>
              <a href={site.instagram} className="trace">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-mute">
            Lo Echevers
          </p>
          <address className="mt-5 not-italic text-sm leading-relaxed text-steel">
            {site.address.line1}
            <br />
            {site.address.commune}, {site.address.city}
            <br />
            <a href={site.phoneHref} className="trace mt-3 inline-block">
              {site.phone}
            </a>
            <br />
            <a href={site.whatsappHref} className="trace inline-block">
              WhatsApp {site.whatsapp}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="trace">
              {site.email}
            </a>
          </address>
          <ul className="mt-6 space-y-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-mute">
            {site.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4">
                <span>{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rule mx-5 md:mx-10 lg:mx-16" aria-hidden="true" />

      <div className="mx-auto flex max-w-[1480px] flex-col gap-3 px-5 py-6 text-[0.68rem] uppercase tracking-[0.16em] text-mute md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
        <p>
          {site.legalName} · RUT {site.rut}
        </p>
        <p className="flex flex-wrap gap-4">
          <Link href="/aviso-legal" className="trace">
            Aviso legal
          </Link>
          <Link href="/privacidad" className="trace">
            Privacidad
          </Link>
          <span>© {new Date().getFullYear()} · Quilicura, Chile</span>
        </p>
      </div>
    </footer>
  );
}
