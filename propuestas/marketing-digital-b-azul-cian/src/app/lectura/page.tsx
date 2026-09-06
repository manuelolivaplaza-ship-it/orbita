import type { Metadata } from "next";
import { Frame } from "@/components/frame";
import { LecturaForm } from "@/components/lectura-form";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { TideTable } from "@/components/tide-table";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pedir una lectura",
  description:
    "Lectura en MAREA, Valparaíso. $92.000, 45 minutos, minuta en 48 horas. Respondemos en 24 horas hábiles.",
};

export default function LecturaPage() {
  return (
    <>
      <PageIntro
        mark="Lectura"
        title="Pida que leamos la cuenta."
        lead="Un documento. Una llamada. 24 horas hábiles. Si el encargo no es nuestro, te lo decimos — y a quién conviene escribir."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Frame
              src="/images/mesa.jpg"
              alt="Mesa de trabajo frente a la bahía, papeles, regla y lápiz cian"
              caption="La minuta sale de esta mesa, no de un deck"
              ratio="aspect-[4/3]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
            <address className="mt-8 not-italic text-[16px] leading-relaxed">
              {site.address.line}
              <br />
              {site.address.city}
              <br />
              {site.metro}
            </address>
            <p className="mt-5 text-[16px]">
              <a href={site.phoneHref} className="link-line">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="link-line">
                {site.email}
              </a>
            </p>
            <p className="mt-5 text-[14px] text-muted">{site.hours}</p>
            <p className="mt-8">
              <a
                href={site.whatsapp}
                className="text-[0.92rem] font-semibold link-line"
              >
                WhatsApp
              </a>
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <LecturaForm />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-16 lg:py-20">
        <div className="shell">
          <TideTable />
        </div>
      </section>
    </>
  );
}
