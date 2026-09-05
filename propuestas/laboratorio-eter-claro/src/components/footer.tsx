import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/data/site";

const columns = [
  {
    title: "Oficio",
    links: [
      { href: "/examenes", label: "Exámenes" },
      { href: "/chequeos", label: "Chequeos" },
      { href: "/preparacion", label: "Preparación" },
      { href: "/resultados", label: "Resultados" },
    ],
  },
  {
    title: "Casa",
    links: [
      { href: "/sucursales", label: "Sucursales" },
      { href: "/domicilio", label: "Domicilio" },
      { href: "/nosotros", label: "Nosotros" },
      { href: "/contacto", label: "Agendar" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-paper-2/40">
      <div className="wrap-wide grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-[1.05rem] leading-relaxed text-ink-soft">
            Laboratorio clínico en Santiago. Precisión serena, informes que se
            leen y una toma de muestra que no se siente como trámite.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title} className="md:col-span-2">
            <p className="eyebrow">{column.title}</p>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-soft no-underline hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="md:col-span-3">
          <p className="eyebrow">Conversar</p>
          <ul className="mt-4 space-y-2 text-ink-soft">
            <li>
              <a href={site.phoneHref} className="no-underline hover:text-ink">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="no-underline hover:text-ink">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.whatsappHref}
                className="no-underline hover:text-ink"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li className="pt-2 text-sm">{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="wrap-wide flex flex-col gap-3 border-t border-line py-6 text-xs tracking-wide text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.legal} · RUT {site.rut}
        </p>
        <p className="flex gap-5">
          <Link href="/privacidad" className="text-mute no-underline hover:text-ink">
            Privacidad
          </Link>
          <span>Santiago, Chile</span>
        </p>
      </div>
    </footer>
  );
}
