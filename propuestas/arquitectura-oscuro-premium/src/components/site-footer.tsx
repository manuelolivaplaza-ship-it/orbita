import Link from "next/link";
import { Mark } from "@/components/logo";
import { nav, studio } from "@/lib/studio";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Mark className="h-7 w-7 text-copper" />
              <span className="font-display text-3xl tracking-[0.18em]">
                ORILLA
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-paper-dim">
              {studio.sentence} Estudio de arquitectura en Lastarria. Casas,
              bodegas, cultura y espacio público en el territorio chileno.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="kicker">Índice</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper-dim transition hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacidad"
                  className="text-sm text-paper-dim transition hover:text-paper"
                >
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="kicker">Estudio</p>
            <address className="mt-4 not-italic text-sm leading-7 text-paper-dim">
              {studio.address}
              <br />
              {studio.neighborhood}
              <br />
              <a href={`mailto:${studio.email}`} className="link-line">
                {studio.email}
              </a>
              <br />
              <a href={studio.phoneHref}>{studio.phone}</a>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {studio.legal} · RUT {studio.rut}
          </p>
          <p>
            {studio.coords} · Calama · Santiago · Valparaíso · Colchagua ·
            Los Lagos
          </p>
        </div>
      </div>
    </footer>
  );
}
