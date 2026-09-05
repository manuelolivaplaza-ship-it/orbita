import Link from "next/link";
import { Clock } from "@/components/clock";
import { Logo } from "@/components/logo";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <p className="overflow-hidden border-b border-line py-4 text-center font-mono text-[0.58rem] uppercase tracking-[0.32em] text-muted">
        ETER · LA HUELLA · LA REINA · 205/55 R16 91V · MONTAJE EN EL DÍA · IVA INCLUIDO
      </p>

      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 md:grid-cols-12 md:px-10 lg:px-16">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-8 max-w-sm font-display text-3xl font-light leading-snug text-ink-soft">
            {site.tagline}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            Casa de neumáticos. La Reina, Santiago. Entre la ciudad y la cuesta.
            Medida leída, no adivinada.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="kicker">Casa</p>
          <ul className="mt-5 space-y-3 text-sm text-ink-soft">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-line">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/cita" className="link-line">
                Cita
              </Link>
            </li>
            <li>
              <a href={site.instagram} className="link-line">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="kicker">Taller</p>
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
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-6 text-[0.68rem] uppercase tracking-[0.16em] text-muted md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
          <p>
            {site.legalName} · RUT {site.rut}
          </p>
          <div className="flex gap-6">
            <Link href="/aviso-legal" className="link-line">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="link-line">
              Privacidad
            </Link>
            <p>© {new Date().getFullYear()} · Santiago, Chile</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
