import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribí al estudio. Primera conversación sin cargo. Honduras 4780, Palermo, Buenos Aires.",
};

export default function ContactoPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Contacto
            </p>
            <h1 className="mt-4 font-display text-5xl leading-none md:text-7xl">
              Hablemos
              <br />
              <em>del lugar.</em>
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-ink-soft">
              Contanos el predio, el programa y los tiempos. Si el encargo
              encaja, coordinamos una visita al sitio o una reunión en el
              atelier.
            </p>

            <address className="mt-10 not-italic">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                Atelier
              </p>
              <p className="mt-3 text-sm leading-7">
                {studio.address}
                <br />
                {studio.neighborhood}
                <br />
                {studio.hours}
              </p>
              <p className="mt-6 text-sm leading-7">
                <a href={`mailto:${studio.email}`} className="link-line">
                  {studio.email}
                </a>
                <br />
                <a href={`tel:${studio.phone.replace(/\s/g, "")}`}>
                  {studio.phone}
                </a>
              </p>
            </address>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="mt-8">
        <div className="relative h-[48vh] min-h-[320px] overflow-hidden bg-paper-2">
          <Image
            src="/images/casa-caleta-exterior.jpg"
            alt="Casa Caleta, José Ignacio"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/20" />
        </div>
      </section>
    </div>
  );
}
