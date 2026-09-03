import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { hours, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "CLARO, Los Conquistadores 2170, Providencia. Teléfono, WhatsApp, horario y mapa.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        kicker="Sede"
        title="Los Conquistadores 2170, Providencia."
        lead="Al norte del Mapocho. Metro Pedro de Valdivia, once minutos a pie. Estacionamiento en el predio, cuatro cupos."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <address className="not-italic text-[17px] leading-relaxed">
              {site.address.line}
              <br />
              {site.address.city}
              <br />
              {site.metro}
              <br />
              {site.parking}
            </address>
            <p className="mt-8 text-[17px]">
              <a href={site.phoneHref} className="link-line">
                {site.phone}
              </a>
              <br />
              <a href={site.mobileHref} className="link-line">
                {site.mobile} · WhatsApp
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="link-line">
                {site.email}
              </a>
            </p>
            <ul className="mt-8 space-y-2 text-[15px] text-muted">
              {hours.map((item) => (
                <li key={item.day} className="flex justify-between gap-4">
                  <span>{item.day}</span>
                  <span className="text-right text-ink">{item.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[14px] leading-relaxed text-muted">
              No somos servicio de urgencia. SAMU 131. Salud Responde 600 360
              7777.
            </p>
            <p className="mt-4 text-[13px] text-muted">
              RUT {site.rut} · {site.superintendencia}
            </p>
          </div>
          <div className="min-h-[420px] border border-line lg:col-span-7">
            <iframe
              title="Mapa de CLARO en Los Conquistadores 2170, Providencia"
              src={site.address.mapsEmbed}
              className="h-full min-h-[420px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
