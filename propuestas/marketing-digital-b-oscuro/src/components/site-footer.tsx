import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="font-serif mt-5 max-w-[32ch] text-paper-dim">
            Estudio de marketing digital en una casona de Yungay. Diez cuentas.
            Pauta sin markup. Si no llega, no es marketing.
          </p>
          <p className="mt-6 font-mono text-[0.68rem] tracking-[0.14em] uppercase text-muted">
            RUT {site.rut}
          </p>
        </div>
        <div>
          <p className="kicker">Índice</p>
          <ul className="mt-4 grid gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-line text-paper-dim hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/lectura" className="link-line text-paper-dim hover:text-paper">
                Lectura
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker">El piso</p>
          <address className="mt-4 not-italic text-paper-dim">
            {site.address.line}
            <br />
            {site.address.city}
            <br />
            {site.metro}
          </address>
          <p className="mt-4">
            <a href={site.phoneHref} className="link-line tabular">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="link-line">
              {site.email}
            </a>
          </p>
          <p className="mt-4 text-sm text-muted">{site.hours}</p>
        </div>
      </div>
      <div className="shell flex flex-wrap items-center justify-between gap-4 border-t border-line py-5 font-mono text-[0.68rem] tracking-[0.12em] uppercase text-muted">
        <p>© {new Date().getFullYear()} {site.legalName}</p>
        <p className="flex gap-5">
          <Link href="/aviso-legal" className="hover:text-paper">
            Aviso legal
          </Link>
          <Link href="/privacidad" className="hover:text-paper">
            Privacidad
          </Link>
        </p>
      </div>
    </footer>
  );
}
