import Link from "next/link";
import { Logo } from "@/components/logo";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-linea bg-papel pb-24 lg:pb-0">
      <div className="shell grid gap-16 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-8 max-w-sm font-display text-3xl leading-snug text-tinta-suave">
            {site.tagline}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-gris">
            Viña de niebla. Lo Ovalle, Casablanca. Seis vinos, cupo visible,
            despacho a todo Chile.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gris">
            Casa
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
              <Link href="/seleccion" className="link-line">
                Selección
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
            Lo Ovalle
          </p>
          <address className="mt-5 not-italic text-sm leading-relaxed text-tinta-suave">
            {site.address.line1}
            <br />
            {site.address.commune}, {site.address.region}
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
          <p className="mt-8 font-display text-4xl text-hoja">{site.altitude} m</p>
          <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
            sobre el nivel del mar
          </p>
        </div>
      </div>

      <div className="border-t border-linea">
        <div className="shell flex flex-col gap-4 py-6 text-[0.7rem] text-gris md:flex-row md:items-center md:justify-between">
          <p>
            {site.legalName} · RUT {site.rut} · Casablanca, Chile
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacidad" className="link-line">
              Privacidad
            </Link>
            <Link href="/aviso-legal" className="link-line">
              Aviso legal
            </Link>
            <span>Boleta y factura electrónica</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
