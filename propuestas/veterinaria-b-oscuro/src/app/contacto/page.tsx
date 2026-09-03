import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Farol Hospital Veterinario, Av. Irarrázaval 2940, Ñuñoa. 24 horas. Teléfono y WhatsApp de guardia.",
};

export default function ContactoPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="07"
        kicker="Contacto"
        title="Irarrázaval 2940. El farol se ve desde la vereda."
        lede="Ñuñoa, Santiago. Metro Ñuñoa a cuatro minutos. Estacionamiento por José Domingo Cañas. Abierto ahora."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <div className="space-y-8 text-paper-dim lg:col-span-5">
          <div>
            <p className="kicker">Teléfono</p>
            <a
              href={site.phoneHref}
              className="mt-3 block font-display text-3xl text-paper tabular"
            >
              {site.phone}
            </a>
            <a href={site.whatsapp} className="mt-2 inline-block link-line">
              WhatsApp
            </a>
          </div>
          <div>
            <p className="kicker">Correo</p>
            <a href={`mailto:${site.email}`} className="mt-3 block text-paper">
              {site.email}
            </a>
          </div>
          <div>
            <p className="kicker">La esquina</p>
            <p className="mt-3">
              {site.address.line}
              <br />
              {site.address.city}, {site.address.region}
              <br />
              {site.metro}
              <br />
              {site.parking}
            </p>
            <a
              href={site.address.maps}
              className="mt-3 inline-block link-line"
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar
            </a>
          </div>
          <div>
            <p className="kicker">Horas</p>
            <p className="mt-3">
              {site.hours}
              <br />
              {site.consultHours}
              <br />
              {site.nightHours}
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="kicker mb-6">Escribir</p>
          <BookingForm />
        </div>
      </div>

      <div className="mt-16 overflow-hidden border border-line">
        <iframe
          title="Mapa de Farol en Ñuñoa"
          src={site.address.mapsEmbed}
          className="h-[360px] w-full grayscale invert"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
