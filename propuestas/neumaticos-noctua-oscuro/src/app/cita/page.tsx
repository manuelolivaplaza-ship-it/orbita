import { Suspense } from "react";
import { CitaForm } from "@/components/cita-form";
import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservar cita",
  description:
    "Agenda montaje diurno o cita nocturna en el atelier NOCTUA de Huechuraba.",
};

export default function CitaPage() {
  return (
    <div className="pt-[4.25rem]">
      <div className="grid lg:grid-cols-2">
        <header className="pad border-b border-line py-16 lg:border-b-0 lg:border-r">
          <p className="kicker">Agenda</p>
          <h1 className="display mt-4 text-5xl sm:text-6xl">Una hora. Un auto.</h1>
          <p className="mt-6 max-w-md leading-relaxed text-mute">
            Completa el formulario. Te confirmamos por WhatsApp en el día. Si
            pides nocturna, el cupo es uno por hora.
          </p>
          <ul className="mt-12 space-y-4 text-sm">
            {site.hours.map((h) => (
              <li key={h.label} className="flex justify-between gap-6 border-b border-line py-2 max-w-sm">
                <span className="text-mute">{h.label}</span>
                <span className="num">{h.value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-sm text-sm text-mute">
            {site.address}
            <br />
            {site.comuna}
          </p>
        </header>
        <div className="pad py-16">
          <Suspense fallback={<p className="text-mute">Cargando…</p>}>
            <CitaForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
