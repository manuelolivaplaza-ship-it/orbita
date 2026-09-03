import Link from "next/link";
import { Mark } from "@/components/logo";
import { SantiagoClock } from "@/components/santiago-clock";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-line">
      <div className="wrap py-16 md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Próximo paso</p>
            <Link
              href="/contacto"
              className="mt-4 block font-display text-[clamp(3.2rem,8vw,7rem)] leading-[0.9] tracking-[-0.045em] text-ink transition-colors hover:text-copper"
            >
              Conversemos
            </Link>
          </div>
          <p className="max-w-xs text-[0.95rem] leading-relaxed text-muted">
            Un correo basta. Si el problema está claro —o si todavía no— lo
            miramos juntos.
          </p>
        </div>

        <div className="rule my-14 md:my-20" />

        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-ink">
              <Mark className="h-7 w-7" />
              <span className="font-display text-2xl tracking-[-0.04em]">Alba</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Estudio de software en Santiago. Productos, plataformas y sistemas
              internos con la claridad de la primera luz.
            </p>
          </div>
          <div>
            <p className="eyebrow">Estudio</p>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              <li>
                <Link href="/trabajo" className="link-line">
                  Trabajo
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="link-line">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/estudio" className="link-line">
                  El estudio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="link-line">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Santiago</p>
            <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-ink">
              <p>{site.address.street}</p>
              <p>
                {site.address.commune}, {site.address.city}
              </p>
              <p>
                <a className="link-line" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>
                <a className="link-line" href={site.whatsappHref}>
                  WhatsApp
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 text-xs tracking-[0.04em] text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.legal}. Hecho en Santiago.</p>
          <SantiagoClock />
          <Link href="/privacidad" className="link-line">
            Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
