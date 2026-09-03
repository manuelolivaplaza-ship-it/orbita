import Link from "next/link";

import { Logo } from "@/components/logo";
import { clinic, hours, nav } from "@/lib/clinic";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/50 pb-20 sm:pb-0">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-pretty text-[0.95rem] leading-relaxed text-muted-foreground">
            {clinic.tagline} Consultorio, cirugía, laboratorio e internación en
            una esquina de Palermo.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            {clinic.address}
            <br />
            {clinic.neighborhood}, {clinic.city}
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="kicker">Visitar</p>
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/turnos" className="text-foreground/80 hover:text-foreground">
                Pedir turno
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="kicker">Horarios</p>
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            {hours.map((entry) => (
              <li
                key={entry.label}
                className="flex items-baseline justify-between gap-4"
              >
                <span className="text-muted-foreground">{entry.label}</span>
                <span className="text-right text-foreground">{entry.value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            <a
              href={`tel:${clinic.phoneTel}`}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {clinic.phoneDisplay}
            </a>
            <span className="text-muted-foreground"> · </span>
            <a
              href={`mailto:${clinic.email}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {clinic.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {clinic.legalName}. Palermo, Buenos Aires.</p>
          <p>Medicina veterinaria de alta complejidad.</p>
        </div>
      </div>
    </footer>
  );
}
