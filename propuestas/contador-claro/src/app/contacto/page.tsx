import type { Metadata } from "next";
import Image from "next/image";
import { ConsultForm } from "@/components/consult-form";
import { DeadlineClock } from "@/components/deadline-clock";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Escribir",
  description:
    "Pida una hora en CLARO. Santa Magdalena 125, Providencia. WhatsApp, correo o el formulario. Respuesta en 24 horas hábiles.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Escribir</p>
            <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,4.8rem)] font-medium leading-[0.94] tracking-tight">
              Pida una hora. La terraza tiene sillas.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
              Cuéntenos el giro y de qué se trata. Si podemos ayudar, le
              proponemos un camino y un honorario. Si no, se lo decimos — y a
              quién conviene llamar.
            </p>

            <div className="mt-10 space-y-6">
              <DeadlineClock />
              <div>
                <p className="kicker mb-2">Casa</p>
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
                  <br />
                  {site.terraceHours}
                </p>
              </div>
              <a
                href={site.whatsapp}
                className="inline-flex h-12 items-center border border-ink px-6 text-[0.9rem] font-semibold tracking-wide hover:border-cobre hover:text-cobre"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ConsultForm />
          </Reveal>
        </div>
      </section>

      <section className="pb-0">
        <div className="relative h-[50vh] min-h-[360px] lg:h-[62vh]">
          <Image
            src="/images/fachada.jpg"
            alt="Fachada de CLARO en Santa Magdalena 125, Providencia"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/50 to-transparent p-6 lg:p-10">
            <p className="text-[12px] tracking-[0.2em] text-luz uppercase">
              {site.address.line} · {site.address.city}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
