import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "ETER en Lo Ovalle, Casablanca. Teléfono, WhatsApp y formulario para visitas, despacho o grupos.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        kicker="Lo Ovalle"
        title="Escríbenos. Contestamos personas."
        lead="Visitas, despacho, grupos de empresa. Si es para hoy, mejor WhatsApp."
      />
      <section className="shell grid gap-16 pb-28 md:grid-cols-12">
        <div className="md:col-span-5">
          <address className="not-italic text-lg leading-relaxed">
            {site.address.line1}
            <br />
            {site.address.commune}, {site.address.region}
            <br />
            {site.access}
          </address>
          <p className="mt-8 nums font-display text-4xl">
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
          <p className="mt-4">
            <a href={site.whatsappHref} className="link-hoja">
              WhatsApp {site.whatsapp}
            </a>
          </p>
          <p className="mt-2">
            <a href={`mailto:${site.email}`} className="link-line">
              {site.email}
            </a>
          </p>
          <ul className="mt-10 space-y-2 text-sm text-tinta-suave">
            {site.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-6 border-b border-linea py-2">
                <span>{row.days}</span>
                <span className="nums">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
