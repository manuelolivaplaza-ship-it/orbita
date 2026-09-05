import type { Metadata } from "next";
import { BriefForm } from "@/components/brief-form";
import { NorthMeter } from "@/components/north-meter";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Pide una lectura en NORTE. Respondemos en 24 horas hábiles. Santa Beatriz 184, Providencia.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        kicker="Escribir"
        title="Pide una lectura."
        lead="Un documento. Una llamada. 24 horas hábiles. Si el encargo no es nuestro, te lo decimos — y a quién conviene escribir."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <NorthMeter />
            <address className="mt-10 not-italic text-[16px] leading-relaxed">
              {site.address.line}
              <br />
              {site.address.city}
              <br />
              {site.metro}
            </address>
            <p className="mt-6 text-[16px]">
              <a href={site.phoneHref} className="link-line">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="link-line">
                {site.email}
              </a>
            </p>
            <p className="mt-6 text-[14px] text-muted">{site.hours}</p>
            <p className="mt-8">
              <a
                href={site.whatsapp}
                className="text-[0.78rem] font-semibold tracking-[0.14em] text-norte uppercase link-line"
              >
                WhatsApp
              </a>
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <BriefForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
