import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-20">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
            Un club de entrenamiento en Lo Barnechea. Salas de yeso claro, cobre
            chileno y la luz del valle como parte del método.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
          <div>
            <p className="kicker">Club</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/visita" className="link-underline">
                  Reservar visita
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="kicker">Visítanos</p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-ink-soft">
              {site.address.street}
              <br />
              {site.address.commune}, {site.address.city}
              <br />
              {site.hours.map((h) => (
                <span key={h.days} className="mt-2 block">
                  {h.days}
                  <br />
                  <span className="text-ink">{h.time}</span>
                </span>
              ))}
            </address>
          </div>

          <div>
            <p className="kicker">Escribir</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={site.emailHref} className="link-underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="link-underline">
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  className="link-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  className="link-underline"
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

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-3 px-5 py-6 text-[0.72rem] uppercase tracking-[0.16em] text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} ALBA Club de Entrenamiento</p>
          <p>Lo Barnechea · Santiago · Chile</p>
        </div>
      </div>
    </footer>
  );
}
