import type { Metadata } from "next";
import { Suspense } from "react";

import { AppointmentForm } from "@/components/appointment-form";
import { HoursLive } from "@/components/hours-live";
import { clinic, hours } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Pedir turno",
  description:
    "Reserve una consulta en Alba. Le confirmamos el horario por WhatsApp. Urgencias: llame al 11 4800 2140.",
};

export default function AppointmentsPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="kicker">Turnos</p>
        <h1 className="display mt-5 text-[2.45rem] leading-[1.06] sm:text-6xl">
          Elíjanos un hueco. Se lo confirmamos.
        </h1>
        <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
          El pedido no cierra el turno hasta que le escribamos. Así evitamos
          dobles reservas y podemos avisar si el médico que necesita ese día no
          está.
        </p>
        <div className="mt-8">
          <HoursLive />
        </div>
        <ul className="mt-10 space-y-3 text-sm">
          {hours.map((entry) => (
            <li key={entry.label} className="flex justify-between gap-4 border-b border-border pb-3">
              <span className="text-muted-foreground">{entry.label}</span>
              <span>{entry.value}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted-foreground">
          Si el animal no puede esperar, no pida turno: llame al{" "}
          <a href={`tel:${clinic.phoneTel}`} className="whitespace-nowrap text-foreground underline">
            {clinic.phoneDisplay}
          </a>
          .
        </p>
      </div>

      <div className="lg:col-span-7">
        <div className="rounded-[1.6rem] border border-border bg-card p-6 sm:p-10">
          <Suspense fallback={<p className="text-muted-foreground">Cargando el formulario…</p>}>
            <AppointmentForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
