import type { Metadata } from "next";
import { EncargoForm } from "@/components/encargo-form";
import { NorthArrow } from "@/components/north-arrow";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Encargo",
  description:
    "Ficha de encargo de COTA Arquitectura. Predio, pendiente, norte y presupuesto en UF. Respuesta en 24 horas hábiles.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        cota="±0.00"
        kicker="Ficha"
        title="Cuéntenos el predio."
        lead="Pendiente, orientación, árboles, el número en UF. Si no somos el estudio, se lo diremos en 24 horas hábiles."
      />
      <section className="pb-24 md:pb-32">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="border border-line bg-cal-2 px-6 py-8">
              <NorthArrow />
              <address className="mt-6 not-italic text-[16px] leading-relaxed">
                {site.legalName}
                <br />
                {site.address.line}
                <br />
                {site.address.city}
                <br />
                {site.metro}
              </address>
              <p className="font-mono mt-5 text-[12px] tracking-wide text-oxido">
                {site.coords}
                <br />
                cota {site.cota}
              </p>
              <p className="mt-6 text-[16px] leading-relaxed">
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
              <p className="mt-6 text-[14px] text-muted">
                {site.hours}
                <br />
                {site.colegio} · {site.aoa}
              </p>
              <p className="mt-6 flex gap-4 text-[14px]">
                <a href={site.whatsapp} className="link-line">
                  WhatsApp
                </a>
                <a
                  href={site.address.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line"
                >
                  Mapa
                </a>
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <EncargoForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
