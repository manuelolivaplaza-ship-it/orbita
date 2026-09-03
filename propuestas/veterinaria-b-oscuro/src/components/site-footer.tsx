import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="shell grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-[30ch] text-[0.95rem] leading-relaxed text-paper-dim">
            {site.tagline} Hospital veterinario 24 horas en Ñuñoa. La puerta no
            se cierra.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          <div>
            <p className="kicker">La esquina</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-paper-dim">
              {site.address.line}
              <br />
              {site.address.city}, Santiago
              <br />
              {site.metro}
              <br />
              {site.parking}
            </p>
          </div>
          <div>
            <p className="kicker">Siempre</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-paper-dim">
              {site.hours}
              <br />
              {site.consultHours}
              <br />
              {site.nightHours}
            </p>
            <a
              href={site.phoneHref}
              className="mt-3 inline-block tabular text-paper link-line"
            >
              {site.phone}
            </a>
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
                <Link href="/hora" className="link-line hover:text-paper">
                  Pedir hora
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="link-line hover:text-paper">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 text-[0.75rem] tracking-wide text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.legalName} · RUT {site.rut} · {site.colegio}
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
