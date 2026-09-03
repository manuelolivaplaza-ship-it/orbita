import Link from "next/link";
import { Logo } from "@/components/logo";
import { Clock } from "@/components/clock";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 md:grid-cols-12 md:px-10 lg:px-16">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-8 max-w-sm font-display text-3xl font-light leading-snug text-ink-soft">
            {site.tagline}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            Casa de automóviles. Lo Barnechea, Santiago. Una colección pequeña,
            visitada con cita.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Casa
          </p>
          <ul className="mt-5 space-y-3 text-sm text-ink-soft">
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
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Visita
          </p>
          <address className="mt-5 not-italic text-sm leading-relaxed text-ink-soft">
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
          <Clock />
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-6 text-[0.68rem] uppercase tracking-[0.18em] text-muted md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
          <p>
            {site.legalName} · RUT {site.rut}
          </p>
          <p>© {new Date().getFullYear()} · Santiago, Chile</p>
        </div>
      </div>
    </footer>
  );
}
