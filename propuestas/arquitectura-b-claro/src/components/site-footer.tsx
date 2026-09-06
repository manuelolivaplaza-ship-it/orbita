import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-cal-2 pb-24 lg:pb-0">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-muted">
              Estudio de arquitectura en Pedro de Valdivia Norte. Casas en
              talud, patios al norte, el corte como proyecto. Desde {site.founded}.
            </p>
            <p className="font-mono mt-8 text-[12px] tracking-wide text-oxido">
              RUT {site.rut} · {site.aoa}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="kicker mb-4">Láminas</p>
              <ul className="space-y-2.5 text-[15px]">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="link-line text-ink/80 hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contacto"
                    className="link-line text-ink/80 hover:text-ink"
                  >
                    Encargo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="kicker mb-4">Cota</p>
              <address className="not-italic text-[15px] leading-relaxed text-ink/80">
                {site.address.line}
                <br />
                {site.address.city}
                <br />
                {site.metro}
              </address>
              <p className="font-mono mt-4 text-[11px] tracking-wide text-oxido">
                {site.coords}
                <br />
                cota {site.cota}
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="kicker mb-4">Mesa</p>
              <p className="text-[15px] leading-relaxed">
                <a href={site.phoneHref} className="link-line">
                  {site.phone}
                </a>
                <br />
                <a href={`mailto:${site.email}`} className="link-line">
                  {site.email}
                </a>
              </p>
              <p className="mt-4 text-[13px] text-muted">
                {site.hours}
                <br />
                {site.colegio}
              </p>
              <p className="mt-4 flex gap-4 text-[13px]">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line"
                >
                  Instagram
                </a>
                <a href={site.whatsapp} className="link-line">
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-[12px] text-muted">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <p className="flex gap-5">
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
