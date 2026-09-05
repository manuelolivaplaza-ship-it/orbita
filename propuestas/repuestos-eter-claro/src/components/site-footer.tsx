import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-line bg-vapor/50 pb-24 lg:pb-10">
      <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-[28ch] text-[15px] leading-relaxed text-muted">
            Sala de piezas en Independencia. Cruzamos ficha. No adivinamos.
          </p>
          <p className="font-sku mt-6 text-[11px] text-muted">{site.rut}</p>
        </div>

        <div className="lg:col-span-3">
          <p className="kicker">Mostrador</p>
          <p className="mt-4 text-[15px] leading-relaxed">
            {site.address.line}
            <br />
            {site.address.city}
            <br />
            {site.metro}
          </p>
          <p className="mt-4 text-[14px] text-muted">{site.hours}</p>
        </div>

        <div className="lg:col-span-2">
          <p className="kicker">Sala</p>
          <ul className="mt-4 space-y-2 text-[15px]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-line text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/consulta" className="link-line text-muted hover:text-ink">
                Consulta
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="kicker">Escribir</p>
          <ul className="mt-4 space-y-2 text-[15px]">
            <li>
              <a href={site.phoneHref} className="link-line">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="link-line">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} className="link-line">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-line py-6 text-[12px] tracking-wide text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {site.legalName}</p>
        <p className="flex gap-5">
          <Link href="/aviso-legal" className="hover:text-ink">
            Aviso legal
          </Link>
          <Link href="/privacidad" className="hover:text-ink">
            Privacidad
          </Link>
        </p>
      </div>
    </footer>
  );
}
