import Link from "next/link";
import { Logo } from "@/components/logo";
import { practices } from "@/lib/data";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-2 pb-20 lg:pb-0">
      <div className="shell py-16 lg:py-20">
        <div className="meander-bg mb-12 h-10" aria-hidden />
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-muted">
              Estudio jurídico en la orilla del Mapocho. Cinco abogados.
              Honorarios por escrito. Desde {site.founded}.
            </p>
            <p className="mt-8 text-[13px] tracking-wide text-navy">
              RUT {site.rut} · {site.colegio}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="kicker mb-4">El estudio</p>
              <ul className="space-y-2.5 text-[15px]">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-line text-ink/80 hover:text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contacto" className="link-line text-ink/80 hover:text-ink">
                    Escribir
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="kicker mb-4">Afluentes</p>
              <ul className="space-y-2.5 text-[15px]">
                {practices.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/areas/${item.slug}`}
                      className="link-line text-ink/80 hover:text-ink"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="kicker mb-4">Orilla</p>
              <address className="not-italic text-[15px] leading-relaxed text-ink/80">
                {site.address.line}
                <br />
                {site.address.city}
                <br />
                {site.metro}
              </address>
              <p className="mt-4 text-[15px]">
                <a href={site.phoneHref} className="link-line">
                  {site.phone}
                </a>
                <br />
                <a href={`mailto:${site.email}`} className="link-line">
                  {site.email}
                </a>
              </p>
              <p className="mt-4 text-[13px] text-muted">{site.hours}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Honorarios en UF + IVA.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/aviso-legal" className="hover:text-ink">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-ink">
              Privacidad
            </Link>
            <span>Un resultado no se promete. Se trabaja.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
