import Link from "next/link";
import { Logo } from "@/components/logo";
import { Clock } from "@/components/night-bar";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 md:grid-cols-12 md:px-10 lg:px-16">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-8 max-w-sm font-display text-3xl font-semibold leading-snug tracking-tight text-paper-dim">
            {site.tagline}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            Casa nocturna de automóviles. Vitacura, Santiago. Una colección
            pequeña, visitada después del crepúsculo.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Casa
          </p>
          <ul className="mt-5 space-y-3 text-sm text-paper-dim">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-line">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.instagram} className="link-line">
                Instagram
              </a>
            </li>
            <li>
              <Link href="/privacidad" className="link-line">
                Privacidad
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Visita
          </p>
          <address className="mt-5 not-italic text-sm leading-relaxed text-paper-dim">
            {site.address.line1}
            <br />
            {site.address.commune}, {site.address.city}
            <br />
            <a href={site.whatsappHref} className="link-line mt-3 inline-block">
              WhatsApp {site.whatsapp}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="link-line">
              {site.email}
            </a>
          </address>
          <ul className="mt-6 space-y-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
            {site.hours.map((row) => (
              <li key={row.days}>
                {row.days} · {row.time}
              </li>
            ))}
          </ul>
          <Clock />
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-6 text-[0.68rem] uppercase tracking-[0.18em] text-muted md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
          <p>
            {site.legalName} · RUT {site.rut}
          </p>
          <p>
            {site.coords.lat} · {site.coords.lng} · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
