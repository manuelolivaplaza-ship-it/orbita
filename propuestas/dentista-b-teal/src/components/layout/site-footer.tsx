import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { nav, site, treatments } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border bg-[color-mix(in_oklch,var(--background),var(--foam)_55%)]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
              Clínica dental junto al Parque Bicentenario, en Vitacura.
              Odontología serena: precisión clínica, calma y resultados que no
              se anuncian.
            </p>
            <p className="mt-6 font-display text-2xl tracking-tight text-foreground">
              {site.phoneIntl}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
            >
              {site.email}
            </a>
            <a
              href={site.whatsapp}
              className="mt-3 inline-block text-sm text-lagoon hover:text-primary"
            >
              WhatsApp {site.whatsappDisplay}
            </a>
          </div>
          <div className="md:col-span-2">
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-muted-foreground">
              Visitar
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/primera-hora" className="hover:text-primary">
                  Agendar hora
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-muted-foreground">
              Tratamientos
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {treatments.slice(0, 6).map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tratamientos/${t.slug}`}
                    className="hover:text-primary"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-muted-foreground">
              Horario
            </p>
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
        <div className="waterline my-10" />
        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.legalName} · {site.fullAddress}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/aviso-legal" className="hover:text-foreground">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-foreground">
              Privacidad
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
