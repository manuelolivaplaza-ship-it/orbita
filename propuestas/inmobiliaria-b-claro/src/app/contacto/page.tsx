import type { Metadata } from "next";
import Image from "next/image";
import { ConsultForm } from "@/components/consult-form";
import { Reveal } from "@/components/reveal";
import { SolarClock } from "@/components/solar-clock";
import { TitleBlock } from "@/components/title-block";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Encargar",
  description:
    "Encargue un solar en SOLAR. Av. Larraín 6412, La Reina. Visitas 11:30 a 14:30. Respuesta en 24 horas hábiles.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="shell">
          <TitleBlock plate="06" place="La Reina" extra="Encargo" />
          <div className="mt-10 grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="kicker">Mesa</p>
              <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,4.8rem)] font-semibold leading-[0.94] tracking-tight">
                Larraín 6412. Hay té y un plano.
              </h1>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
                Cincuenta minutos, sin honorario. Si el solar que busca cabe en
                esta mesa, le proponemos una visita al mediodía.
              </p>
              <div className="mt-10 space-y-6">
                <SolarClock />
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
                    <a href={site.mobileHref} className="link-line">
                      {site.mobile}
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
                    {site.visitHours}
                  </p>
                </div>
                <a
                  href={site.whatsapp}
                  className="font-display inline-flex h-12 items-center border border-ink px-6 text-[0.9rem] font-semibold hover:border-teja hover:text-teja"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <ConsultForm />
            </Reveal>
          </div>
        </div>
      </section>
      <section>
        <div className="relative h-[50vh] min-h-[360px] lg:h-[62vh]">
          <Image
            src="/images/fachada.jpg"
            alt="Fachada de SOLAR en Avenida Larraín, La Reina"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
