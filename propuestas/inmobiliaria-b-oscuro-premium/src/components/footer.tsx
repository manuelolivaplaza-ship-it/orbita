import Link from "next/link";
import { nav, site } from "@/data/site";
import { Mark } from "./mark";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Mark className="h-10 w-7" />
              <div>
                <p className="font-mono text-[11px] tracking-[0.38em]">OBSIDIANA</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.28em] text-gold">
                  ATELIER · DESDE {site.founded}
                </p>
              </div>
            </div>
            <p className="mt-8 max-w-sm font-display text-3xl leading-tight text-ivory-soft italic">
              {site.claim}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="kicker mb-5">Mapa</p>
              <ul className="space-y-3 text-sm text-muted">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-gold">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/visita" className="hover:text-gold">
                    Visita privada
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="kicker mb-5">Atelier</p>
              <address className="space-y-2 text-sm not-italic text-muted">
                <p>{site.address.street}</p>
                <p>
                  {site.address.comuna}, {site.address.city}
                </p>
                <p>{site.hours}</p>
              </address>
            </div>
            <div>
              <p className="kicker mb-5">Contacto</p>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-gold">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/56991882304"
                    className="hover:text-gold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp {site.mobile}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--line)] pt-6 text-[11px] tracking-[0.16em] text-muted uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legal} · {site.rut}
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-gold">
              Privacidad
            </Link>
            <span>Santiago, Chile</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
