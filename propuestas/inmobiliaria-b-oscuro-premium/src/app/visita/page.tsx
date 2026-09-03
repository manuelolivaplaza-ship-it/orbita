import type { Metadata } from "next";
import Image from "next/image";
import { Container, Reveal } from "@/components/reveal";
import { VisitForm } from "@/components/visit-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Visita privada",
  description:
    "Solicite una visita privada a una residencia de la colección Obsidiana. Sin open house, con cita.",
};

export default function VisitaPage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Visita privada</p>
            <h1 className="display mt-5 text-6xl sm:text-7xl">
              La puerta se abre
              <br />
              <em className="text-gold">con cita.</em>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              Completa el formulario o escribe a{" "}
              <a href={`mailto:${site.email}`} className="text-gold">
                {site.email}
              </a>
              . Coordinamos un atardecer. Si la casa no es para ustedes, lo
              decimos antes.
            </p>
            <dl className="mt-10 space-y-4 text-sm text-ivory-soft">
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                  Atelier
                </dt>
                <dd className="mt-1">
                  {site.address.street}
                  <br />
                  {site.address.comuna}, {site.address.city}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                  Horario
                </dt>
                <dd className="mt-1">{site.hours}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                  WhatsApp
                </dt>
                <dd className="mt-1">
                  <a href="https://wa.me/56991882304" className="hover:text-gold">
                    {site.mobile}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <VisitForm />
          </Reveal>
        </div>

        <Reveal className="relative mt-20 min-h-[360px] overflow-hidden">
          <Image
            src="/images/interior-biblioteca.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#070706]/45" />
        </Reveal>
      </Container>
    </div>
  );
}
