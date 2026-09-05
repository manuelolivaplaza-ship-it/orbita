import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";
import { formatCLP } from "@/lib/format";

export function Footer() {
  return (
    <footer className="border-t border-linea bg-papel-2">
      <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-tinta-suave">
            Objetos para la mesa, reunidos desde Chile. La casa abre a las
            once. El despacho llega a tu comuna. Precio con IVA.
          </p>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
            Despacho sin costo desde {formatCLP(site.freeShippingFrom)}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
          <div>
            <p className="kicker">Casa</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-line">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/carrito" className="link-line">
                  Carrito
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="kicker">Lastarria</p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-tinta-suave">
              {site.address.line}
              <br />
              {site.address.commune}
              <br />
              {site.hours.map((h) => (
                <span key={h.days} className="mt-2 block">
                  {h.days}
                  <br />
                  <span className="text-tinta">{h.time}</span>
                </span>
              ))}
            </address>
          </div>

          <div>
            <p className="kicker">Escribir</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={site.emailHref} className="link-line">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="link-line">
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  className="link-line"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  className="link-line"
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-linea py-6 text-[0.72rem] text-gris sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.legalName} · RUT {site.rut}
        </p>
        <p>Precios en pesos chilenos, IVA incluido.</p>
      </div>
    </footer>
  );
}
