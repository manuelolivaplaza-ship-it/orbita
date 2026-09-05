import Link from "next/link";
import { Clock } from "@/components/clock";
import { Logo } from "@/components/logo";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-linea bg-papel pb-20 lg:pb-0">
      <div className="border-b border-linea bg-papel-2/50">
        <div className="shell flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-sage-deep">
            {site.crisis.label}
          </p>
          <p className="text-sm text-tinta-suave">
            Esta casa no es urgencia.{" "}
            <a href={site.crisis.phoneHref} className="link-sage nums">
              Salud Responde {site.crisis.phone}
            </a>
            {" · "}
            <a href={site.crisis.altHref} className="link-sage">
              {site.crisis.alt}
            </a>{" "}
            prevención del suicidio.
          </p>
        </div>
      </div>

      <div className="shell grid gap-16 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-8 max-w-sm font-display text-3xl font-light leading-snug text-tinta-suave">
            {site.tagline}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-gris">
            Centro de salud mental. Providencia, Santiago. Psicología clínica y
            psiquiatría. Cincuenta minutos, la misma persona.
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
              <Link href="/valores" className="link-line">
                Valores
              </Link>
            </li>
            <li>
              <Link href="/primera" className="link-line">
                Primera hora
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
            Contacto
          </p>
          <address className="mt-5 not-italic text-sm leading-relaxed text-tinta-suave">
            {site.address.line1}
            <br />
            {site.address.commune}, {site.address.city}
            <br />
            {site.metro}
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
          <Clock />
        </div>
      </div>

      <div className="border-t border-linea">
        <div className="shell flex flex-col gap-3 py-6 text-[0.68rem] uppercase tracking-[0.18em] text-gris md:flex-row md:items-center md:justify-between">
          <p>
            {site.legalName} · RUT {site.rut} · SII · boleta electrónica
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
