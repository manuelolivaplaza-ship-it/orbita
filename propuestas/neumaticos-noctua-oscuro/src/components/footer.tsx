import Link from "next/link";
import { Logo } from "@/components/mark";
import { nav, site } from "@/data/site";
import { lines } from "@/data/products";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-line bg-bg">
      <div className="pad grid gap-16 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="serif mt-8 max-w-sm text-2xl leading-snug text-ink">
            {site.tagline}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-mute">
            Atelier de neumáticos. Huechuraba, Santiago. Compuestos para un país
            que cambia de clima cada cuatrocientos kilómetros.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm md:col-span-7 md:grid-cols-3">
          <div>
            <p className="kicker mb-5">Navegar</p>
            <ul className="space-y-2.5 text-mute">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/cita" className="hover:text-ink">
                  Reservar cita
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker mb-5">Líneas</p>
            <ul className="space-y-2.5 text-mute">
              {lines.map((l) => (
                <li key={l.id}>
                  <Link href={`/catalogo?linea=${l.id}`} className="hover:text-ink">
                    {l.latin}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker mb-5">Taller</p>
            <ul className="space-y-2.5 text-mute">
              <li>{site.address}</li>
              <li>{site.comuna}</li>
              <li>
                <a href={site.phoneHref} className="hover:text-ink">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li>Jue–sáb 21:00—01:00</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pad flex flex-col gap-3 border-t border-line py-5 text-[0.6875rem] tracking-[0.18em] text-faint uppercase sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} NOCTUA SpA · Santiago de Chile</span>
        <span>IVA incluido · Precios en CLP</span>
      </div>
    </footer>
  );
}
