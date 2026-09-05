import Link from "next/link";
import { OwlMark } from "@/components/OwlMark";
import { VineyardClock } from "@/components/VineyardClock";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-ink px-6 pb-10 pt-16 md:px-12 lg:px-16">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link href="/" className="flex items-center gap-3">
            <OwlMark className="h-10 w-8 text-brass" />
            <span className="font-display text-2xl tracking-[0.32em]">
              NOCTUA
            </span>
          </Link>
          <p className="mt-6 max-w-sm font-display text-2xl italic leading-snug text-parchment">
            {site.tagline}
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-kicker text-mist">
            Hora en el valle · <VineyardClock />
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
          <div>
            <p className="kicker">Viñedo</p>
            <ul className="mt-4 space-y-2 text-sm text-parchment">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-bone">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/carrito" className="hover:text-bone">
                  Carrito
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker">Contacto</p>
            <ul className="mt-4 space-y-2 text-sm text-parchment">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-bone">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  className="hover:text-bone"
                >
                  WhatsApp {site.phoneDisplay}
                </a>
              </li>
              <li className="max-w-[16rem] leading-relaxed">{site.address}</li>
            </ul>
          </div>
          <div>
            <p className="kicker">Coordenadas</p>
            <ul className="mt-4 space-y-2 font-mono text-xs text-parchment">
              <li>{site.coords.lat}</li>
              <li>{site.coords.lon}</li>
              <li>{site.coords.altitude.toLocaleString("es-CL")} m s.n.m.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rule mt-16" />

      <div className="mt-6 flex flex-col gap-3 text-[11px] leading-relaxed text-mist md:flex-row md:items-end md:justify-between">
        <p>
          El exceso de alcohol es perjudicial para la salud. Ley N° 19.925.
          Venta exclusiva a mayores de 18 años.
        </p>
        <p className="shrink-0">
          © {new Date().getFullYear()} {site.legal} · Paihuano, Chile
        </p>
      </div>
    </footer>
  );
}
