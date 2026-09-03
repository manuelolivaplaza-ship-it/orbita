import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { NightClock } from "@/components/night-clock";
import { PageIntro } from "@/components/page-intro";
import { site, tariffs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pedir hora",
  description:
    "Agenda una consulta en Farol, hospital veterinario 24 horas en Ñuñoa. Si es urgente, llama a la guardia.",
};

export default function HoraPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="06"
        kicker="Agenda"
        title="Si puede esperar al día, pídela acá."
        lede="Te escribimos en el día. Si no puede esperar, no uses este formulario: llama a la guardia."
      />

      <div className="mt-12 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <NightClock className="mb-8 text-sm text-paper-dim" />
          <BookingForm />
        </div>
        <aside className="lg:col-span-5 lg:col-start-8">
          <p className="kicker">Guardia</p>
          <p className="mt-4 font-display text-3xl leading-tight">
            {site.phone}
          </p>
          <p className="mt-3 text-paper-dim">
            WhatsApp o llamada. El triaje es parte del trabajo. No dejes a un
            animal que no respira en una cola de formulario.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn btn-primary">
              Llamar
            </a>
            <a href={site.whatsappUrgencia} className="btn btn-ghost">
              WhatsApp
            </a>
          </div>

          <p className="kicker mt-12">Consulta diurna</p>
          <ul className="mt-4 border-t border-line">
            {tariffs.slice(0, 4).map((row) => (
              <li
                key={row.item}
                className="flex items-baseline justify-between gap-4 border-b border-line py-3 text-sm"
              >
                <span className="text-paper-dim">{row.item}</span>
                <span className="font-mono tabular text-lantern">{row.price}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">
            {site.address.line}, {site.address.city}. {site.metro}.
          </p>
        </aside>
      </div>
    </div>
  );
}
