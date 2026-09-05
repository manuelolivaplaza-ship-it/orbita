import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Encargo",
  description:
    "Escribe al estudio. Primera conversación sin cargo. Lastarria 70, Santiago.",
};

export default function ContactoPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="shell py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Encargo</p>
            <h1 className="mt-4 font-display text-5xl leading-none md:text-7xl">
              Hablemos
              <br />
              <em className="italic text-copper">del predio.</em>
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-paper-dim">
              Cuéntanos el terreno, el programa y los tiempos. Si el encargo
              calza, coordinamos una visita al predio o una reunión en
              Lastarria.
            </p>

            <address className="mt-10 not-italic">
              <p className="kicker">Atelier</p>
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
                <a href={studio.phoneHref}>{studio.phone}</a>
                <br />
                <a href={studio.whatsapp} className="link-line">
                  WhatsApp {studio.mobile}
                </a>
              </p>
              <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-muted">
                {studio.coords}
              </p>
            </address>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="mt-8">
        <div className="relative h-[48vh] min-h-[320px] overflow-hidden bg-surface">
          <Image
            src="/images/casa-tunquen.jpg"
            alt="Patio de Casa Tunquén, Algarrobo"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-void/25" />
        </div>
      </section>
    </div>
  );
}
