import Link from "next/link";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Corredora boutique del oriente de Santiago. Menos ruido, mejor casa.
            Visitas filtradas, tasación honesta, cierre acompañado hasta la notaría.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Sitio
          </p>
          <ul className="mt-4 grid gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/propiedades?op=arriendo" className="hover:text-primary">
                Arriendos
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Oficina
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            <li>{site.address}</li>
            <li>{site.comuna}</li>
            <li>
              <a href={site.phoneHref} className="hover:text-primary">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
          </p>
          <p>Precios en UF. Valores referenciales, sujetos a cambio.</p>
        </Container>
      </div>
    </footer>
  );
}
