import type { Metadata } from "next";
import Image from "next/image";
import { ConsultForm } from "@/components/consult-form";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Pida una consulta. Av. Alvear 1867, Recoleta. La primera conversación no se factura.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro overline="Contacto" title="La primera conversación no se factura.">
        <p>
          Recibimos con hora. Cuéntenos de qué se trata: si podemos ayudar, le
          proponemos un camino. Si no, se lo decimos.
        </p>
      </PageIntro>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <dl className="space-y-8">
                <div>
                  <dt className="overline-label">Sede</dt>
                  <dd className="mt-3 text-[17px] leading-relaxed">
                    {site.address.line}
                    <br />
                    {site.address.city}
                    <br />
                    {site.address.country}
                  </dd>
                </div>
                <div>
                  <dt className="overline-label">Teléfono</dt>
                  <dd className="mt-3 text-[17px]">
                    <a href={site.phoneHref} className="link-underline">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="overline-label">Correo</dt>
                  <dd className="mt-3 text-[17px]">
                    <a href={`mailto:${site.email}`} className="link-underline">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="overline-label">Horario</dt>
                  <dd className="mt-3 text-[17px] text-muted-foreground">
                    {site.hours}
                  </dd>
                </div>
                <div>
                  <dt className="overline-label">WhatsApp</dt>
                  <dd className="mt-3 text-[17px]">
                    <a
                      href={site.whatsapp}
                      className="link-underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Escribir al estudio
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="mt-12 max-w-sm text-[13px] leading-relaxed text-muted-foreground">
                No enviamos newsletters. No cedemos datos. La consulta se usa
                únicamente para responderle.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <div id="consulta">
                <ConsultForm />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-20">
            <div className="relative aspect-[16/8] overflow-hidden bg-paper-2">
              <Image
                src="/images/facade.jpg"
                alt="Fachada de la sede en Avenida Alvear, Recoleta"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex flex-col justify-between gap-2 text-[13px] text-muted-foreground sm:flex-row">
              <p>Av. Alvear 1867 · Recoleta, CABA</p>
              <a
                href={site.address.maps}
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                Abrir en mapas →
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
