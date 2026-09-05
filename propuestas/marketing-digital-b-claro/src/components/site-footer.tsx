import Link from "next/link";
import { Logo } from "@/components/logo";
import { practices } from "@/lib/data";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-linea bg-nieve-2 pb-24 lg:pb-0">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-muted">
              Agencia de marketing digital en una casa de Providencia. Cinco
              personas. Luz de norte. Desde {site.founded}.
            </p>
            <p className="mt-8 text-[13px] tracking-wide text-cielo">
              RUT {site.rut}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="kicker mb-4">La casa</p>
              <ul className="space-y-2.5 text-[15px]">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-line text-tinta/80 hover:text-tinta">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contacto" className="link-line text-tinta/80 hover:text-tinta">
                    Escribir
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="kicker mb-4">Práctica</p>
              <ul className="space-y-2.5 text-[15px]">
                {practices.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/practica/${item.slug}`}
                      className="link-line text-tinta/80 hover:text-tinta"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="kicker mb-4">Sede</p>
              <address className="not-italic text-[15px] leading-relaxed text-tinta/80">
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
              <p className="mt-4 flex gap-4 text-[13px]">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line"
                >
                  Instagram
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-linea pt-6 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Honorarios en UF + IVA.
          </p>
          <p className="flex gap-4">
            <Link href="/privacidad" className="link-line">
              Privacidad
            </Link>
            <Link href="/aviso-legal" className="link-line">
              Aviso legal
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
