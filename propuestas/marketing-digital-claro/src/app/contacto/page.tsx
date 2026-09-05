import type { Metadata } from "next";
import Image from "next/image";
import { BriefForm } from "@/components/brief-form";
import { Reveal } from "@/components/reveal";
import { SunArc } from "@/components/sun-arc";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Pide un brief en FARO. Lastarria 70, Santiago. WhatsApp, correo o el formulario. Respuesta en 24 horas hábiles.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Contacto</p>
            <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,4.8rem)] font-medium leading-[0.94] tracking-tight">
              Pide un brief. La mesa tiene sillas.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
              Cuéntanos de qué se trata. Si podemos ayudar, proponemos un camino
              y un honorario. Si no, te lo decimos — y a quién conviene llamar.
            </p>

            <div className="mt-10 space-y-8">
              <SunArc />
              <div>
                <p className="kicker mb-2">Estudio</p>
                <p className="text-[16px] leading-relaxed">
                  {site.address.line}
                  <br />
                  {site.address.city}
                  <br />
                  {site.metro}
                </p>
              </div>
              <div>
                <p className="kicker mb-2">Contacto</p>
                <p className="text-[16px] leading-relaxed">
                  <a href={site.phoneHref} className="link-line">
                    {site.phone}
                  </a>
                  <br />
                  <a href={`mailto:${site.email}`} className="link-line">
                    {site.email}
                  </a>
                </p>
              </div>
              <div>
                <p className="kicker mb-2">Horario</p>
                <p className="text-[16px] leading-relaxed text-muted">
                  {site.hours}
                </p>
              </div>
              <a
                href={site.whatsapp}
                className="inline-flex h-12 items-center border border-ink px-6 text-[0.9rem] font-semibold hover:border-cobre hover:text-cobre"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <BriefForm />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="relative h-[50vh] min-h-[360px] lg:h-[62vh]">
          <Image
            src="/images/lastarria.jpg"
            alt="Lastarria a primera hora, a cuatro minutos del metro"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
