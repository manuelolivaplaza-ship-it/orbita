import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, studio } from "@/lib/studio";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="shell grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-[32ch] text-[0.95rem] leading-relaxed text-paper-dim">
            {studio.tagline} Residencial y obra nueva. Un arquitecto a cargo,
            de punta a punta.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          <div>
            <p className="kicker">Estudio</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-paper-dim">
              {studio.address}
              <br />
              {studio.neighborhood}
              <br />
              {studio.city}
            </p>
          </div>
          <div>
            <p className="kicker">Horas</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-paper-dim">
              {studio.hours}
              <br />
              Responde el arquitecto
            </p>
            <a
              href={studio.phoneHref}
              className="link-line mt-3 inline-block text-paper"
            >
              {studio.phone}
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
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 text-[0.75rem] tracking-wide text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {studio.legal} · RUT {studio.rut}
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
