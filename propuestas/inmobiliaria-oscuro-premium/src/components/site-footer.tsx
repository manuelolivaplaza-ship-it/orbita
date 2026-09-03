import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";
import { territories } from "@/lib/properties";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="shell grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-[30ch] text-[0.95rem] leading-relaxed text-paper-dim">
            {site.tagline} Inventario privado en el oriente de Santiago, la
            costa de Zapallar y los lagos del sur.
          </p>
          <p className="mt-4 font-mono text-[0.72rem] tracking-[0.14em] text-brass uppercase">
            {site.coords}
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          <div>
            <p className="kicker">La mesa</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-paper-dim">
              {site.address.line}
              <br />
              {site.address.city}
              <br />
              {site.hours}
              <br />
              {site.lastHour}
            </p>
            <a
              href={site.phoneHref}
              className="mt-3 inline-block text-paper link-line tabular"
            >
              {site.phone}
            </a>
          </div>
          <div>
            <p className="kicker">Territorio</p>
            <ul className="mt-4 grid gap-2 text-[0.95rem] text-paper-dim">
              {territories.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/territorio/${t.slug}`}
                    className="link-line hover:text-paper"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker">Índice</p>
            <ul className="mt-4 grid gap-2 text-[0.95rem] text-paper-dim">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-line hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/consulta" className="link-line hover:text-paper">
                  Solicitar presentación
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 text-[0.75rem] tracking-wide text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.legalName} · RUT {site.rut} · {site.cbr}
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/aviso-legal" className="hover:text-paper">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-paper">
              Privacidad
            </Link>
            <span>© {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
