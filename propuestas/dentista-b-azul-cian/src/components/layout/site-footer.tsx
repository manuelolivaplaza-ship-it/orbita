import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { nav, site, treatments } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-8 bg-navy text-background">
      <div className="h-px bg-gradient-to-r from-transparent via-cian to-transparent" />
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo inverted />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-background/70">
              Odontología contemporánea en Vitacura. Diagnóstico visible, plan
              por escrito, cifra en pesos. Frente al parque, con la cordillera
              al fondo.
            </p>
            <p className="mt-6 font-display text-2xl tracking-tight">
              {site.phoneIntl}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-sm text-cian hover:text-background"
            >
              {site.email}
            </a>
          </div>
          <div className="md:col-span-2">
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-cian">
              Visitar
            </p>
            <ul className="mt-4 space-y-2 text-sm text-background/80">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-background">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/hora" className="hover:text-background">
                  Agendar hora
                </Link>
              </li>
              <li>
                <Link href="/reembolso" className="hover:text-background">
                  Reembolso isapre
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-background">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-cian">
              Tratamientos
            </p>
            <ul className="mt-4 space-y-2 text-sm text-background/80">
              {treatments.slice(0, 6).map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tratamientos/${t.slug}`}
                    className="hover:text-background"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-cian">
              Horario
            </p>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              {site.hours.map((h) => (
                <li key={h.day}>
                  <span className="block text-background">{h.day}</span>
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 h-px bg-background/10" />
        <div className="mt-6 flex flex-col gap-3 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.legalName} · RUT {site.rut} · {site.fullAddress}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/aviso-legal" className="hover:text-background">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-background">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-background">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
