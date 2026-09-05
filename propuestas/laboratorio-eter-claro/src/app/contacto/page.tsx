import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/data/site";
import { sucursales } from "@/data/sucursales";

export const metadata: Metadata = {
  title: "Agendar hora",
  description:
    "Agenda tu toma de muestra en ETER. Sucursal o domicilio, Santiago de Chile.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        kicker="Agendar"
        title="Pide tu hora. Te confirmamos en minutos."
        lead="Completa el formulario o escríbenos por WhatsApp. Si traes orden médica, una foto basta."
      />
      <div className="wrap grid gap-16 pb-24 md:grid-cols-12">
        <div className="md:col-span-7">
          <BookingForm />
        </div>
        <aside className="md:col-span-4 md:col-start-9">
          <p className="eyebrow">Directo</p>
          <ul className="mt-5 space-y-3 text-lg">
            <li>
              <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
          <p className="mt-10 eyebrow">Horario de toma</p>
          <p className="mt-3 text-ink-soft">{site.hours}</p>
          <p className="mt-1 text-ink-soft">Domicilio · {site.domicilioHours}</p>
          <p className="mt-10 eyebrow">Sucursales</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            {sucursales.map((item) => (
              <li key={item.slug}>
                {item.nombre} · {item.direccion}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}
