import Link from "next/link";
import { Logo } from "@/components/logo";
import { Container } from "@/components/layout/container";
import { nav, site, treatments } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-carbon">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
              Clínica odontológica boutique en Vitacura. Tres especialistas,
              siempre los mismos. No rotamos tu caso.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 block font-display text-2xl tracking-tight tabular"
            >
              {site.phoneIntl}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-sm text-muted-foreground hover:text-champagne"
            >
              {site.email}
            </a>
            <a
              href={site.instagram}
              className="mt-3 block text-sm text-muted-foreground hover:text-champagne"
            >
              Instagram
            </a>
          </div>
          <div className="md:col-span-2">
            <p className="kicker">Visitar</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-champagne">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/agenda" className="hover:text-champagne">
                  Agendar
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-champagne">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="kicker">Prestaciones</p>
            <ul className="mt-4 space-y-2 text-sm">
              {treatments.slice(0, 6).map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tratamientos/${t.slug}`}
                    className="hover:text-champagne"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="kicker">Horario</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {site.hours.map((h) => (
                <li key={h.day}>
                  <span className="block text-foreground">{h.day}</span>
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Vitacura, Santiago.
          </p>
          <div className="flex gap-5">
            <Link href="/privacidad" className="hover:text-foreground">
              Privacidad
            </Link>
            <Link href="/aviso-legal" className="hover:text-foreground">
              Aviso legal
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
