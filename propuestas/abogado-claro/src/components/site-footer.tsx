import Link from "next/link";
import { Container } from "@/components/container";
import { practices } from "@/lib/data";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-2">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-display text-5xl tracking-[0.28em] text-ink sm:text-6xl">
              ALBA
            </p>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Estudio jurídico boutique en Recoleta. Asuntos que no admiten
              ruido. Desde {site.founded}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="overline-label mb-4">Estudio</p>
              <ul className="space-y-2.5 text-[15px]">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="link-underline text-ink/80 hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contacto"
                    className="link-underline text-ink/80 hover:text-ink"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="overline-label mb-4">Áreas</p>
              <ul className="space-y-2.5 text-[15px]">
                {practices.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/areas/${item.slug}`}
                      className="link-underline text-ink/80 hover:text-ink"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="overline-label mb-4">Sede</p>
              <address className="not-italic text-[15px] leading-relaxed text-ink/80">
                {site.address.line}
                <br />
                {site.address.city}
                <br />
                {site.address.country}
              </address>
              <p className="mt-4 text-[15px]">
                <a
                  href={site.phoneHref}
                  className="link-underline text-ink/80 hover:text-ink"
                >
                  {site.phone}
                </a>
                <br />
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline text-ink/80 hover:text-ink"
                >
                  {site.email}
                </a>
              </p>
              <p className="mt-4 text-[13px] text-muted-foreground">
                {site.hours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-[12px] tracking-wide text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos los derechos
            reservados.
          </p>
          <p>Matrícula CPACF · Buenos Aires</p>
        </div>
      </Container>
    </footer>
  );
}
