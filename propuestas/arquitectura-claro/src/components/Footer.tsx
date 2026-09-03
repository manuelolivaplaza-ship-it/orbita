import Link from "next/link";
import { Mark } from "@/components/Logo";
import { nav, studio } from "@/lib/studio";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Mark className="h-7 w-7 text-paper" />
              <span className="font-display text-3xl tracking-[0.16em]">
                VETA
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-paper/70">
              {studio.sentence} Atelier de arquitectura en Buenos Aires.
              Casas, bodegas, cultura y espacio público.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.24em] text-paper/45">
              Índice
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/80 transition hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.24em] text-paper/45">
              Estudio
            </p>
            <address className="mt-4 not-italic text-sm leading-7 text-paper/80">
              {studio.address}
              <br />
              {studio.neighborhood}
              <br />
              <a href={`mailto:${studio.email}`} className="link-line">
                {studio.email}
              </a>
              <br />
              <a href={`tel:${studio.phone.replace(/\s/g, "")}`}>
                {studio.phone}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VETA Atelier</p>
          <p>Buenos Aires · Montevideo · Mendoza</p>
        </div>
      </div>
    </footer>
  );
}
