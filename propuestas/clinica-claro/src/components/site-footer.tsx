import Link from "next/link";
import { Logo } from "@/components/logo";
import { specialties } from "@/lib/data";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-luz-2 pb-24 lg:pb-0">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-muted">
              Clínica médica en una casa de Los Conquistadores. Ocho
              especialistas. Cuarenta y cinco minutos. Desde {site.founded}.
            </p>
            <p className="font-sans mt-8 text-[12px] tracking-[0.14em] text-hoja uppercase">
              RUT {site.rut}
            </p>
            <p className="mt-2 text-[13px] text-muted">{site.colegio}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="kicker mb-4">La casa</p>
              <ul className="space-y-2.5 text-[15px]">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-line text-ink/80 hover:text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/convenios" className="link-line text-ink/80 hover:text-ink">
                    Convenios
                  </Link>
                </li>
                <li>
                  <Link href="/agenda" className="link-line text-ink/80 hover:text-ink">
                    Pedir hora
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="kicker mb-4">Salas</p>
              <ul className="space-y-2.5 text-[15px]">
                {specialties.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/especialidades/${item.slug}`}
                      className="link-line text-ink/80 hover:text-ink"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="kicker mb-4">Sede</p>
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
                <a href={site.mobileHref} className="link-line">
                  {site.mobile}
                </a>
                <br />
                <a href={`mailto:${site.email}`} className="link-line">
                  {site.email}
                </a>
              </p>
              <p className="mt-4 text-[13px] text-muted">{site.hoursShort}</p>
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
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {site.superintendencia}.
          </p>
          <p className="flex gap-5">
            <Link href="/privacidad" className="link-line">
              Privacidad
            </Link>
            <Link href="/aviso-legal" className="link-line">
              Aviso legal
            </Link>
            <Link href="/contacto" className="link-line">
              Contacto
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
