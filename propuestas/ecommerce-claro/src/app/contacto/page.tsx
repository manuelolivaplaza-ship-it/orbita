import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Escribir",
  description: "WhatsApp, correo o el formulario. Bazar Austral en Lastarria.",
};

export default function ContactoPage() {
  return (
    <section className="shell grid gap-16 pt-28 pb-24 lg:grid-cols-12 lg:pt-36 lg:pb-32">
      <div className="lg:col-span-5">
        <p className="kicker">Escribir</p>
        <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,5rem)] leading-[0.92] tracking-tight">
          Una pieza, una duda, una visita.
        </h1>
        <p className="mt-6 max-w-md text-[17px] leading-relaxed text-tinta-suave">
          Respondemos en horario de casa. Si es por stock, WhatsApp es más
          rápido: apartamos el mismo día.
        </p>
        <ul className="mt-10 space-y-3 text-sm">
          <li>
            <a href={site.emailHref} className="link-line">
              {site.email}
            </a>
          </li>
          <li>
            <a href={site.phoneHref} className="link-line">
              {site.phone}
            </a>
          </li>
          <li>
            <a href={site.whatsappHref} className="link-line" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </li>
          <li className="pt-4 text-tinta-suave">
            {site.address.line}
            <br />
            {site.hoursShort}
          </li>
        </ul>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <ContactForm />
      </div>
    </section>
  );
}
