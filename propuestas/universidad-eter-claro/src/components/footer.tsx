import Link from "next/link";
import { Altitude } from "@/components/altitude";
import { Logo } from "@/components/logo";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-linea bg-papel pb-20 lg:pb-0">
      <div className="shell grid gap-16 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-8 max-w-sm font-display text-3xl font-light leading-snug text-tinta-suave">
            {site.tagline}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-gris">
            Instituto universitario. Sede única en El Arrayán, Lo Barnechea.
            Ocho carreras. Mil doscientos cuarenta estudiantes.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gris">
            Campus
          </p>
          <ul className="mt-5 space-y-3 text-sm text-tinta-suave">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-line">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/investigacion" className="link-line">
                Investigación
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="link-line">
                Contacto
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
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gris">
            El Arrayán
          </p>
          <address className="mt-5 not-italic text-sm leading-relaxed text-tinta-suave">
            {site.address.line1}
            <br />
            {site.address.commune}, {site.address.city}
            <br />
            {site.access}
            <br />
            <a href={site.phoneHref} className="link-line mt-3 inline-block nums">
              {site.phone}
            </a>
            <br />
            <a href={site.whatsappHref} className="link-line">
              WhatsApp {site.whatsapp}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="link-line">
              {site.email}
            </a>
          </address>
          <div className="mt-8">
            <Altitude />
          </div>
        </div>
      </div>

      <div className="border-t border-linea">
        <div className="shell flex flex-col gap-3 py-6 text-[0.68rem] uppercase tracking-[0.18em] text-gris md:flex-row md:items-center md:justify-between">
          <p>
            {site.legalName} · RUT {site.rut}
          </p>
          <p className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacidad" className="link-line">
              Privacidad
            </Link>
            <Link href="/aviso-legal" className="link-line">
              Aviso legal
            </Link>
            <span>© {new Date().getFullYear()} · Santiago, Chile</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
