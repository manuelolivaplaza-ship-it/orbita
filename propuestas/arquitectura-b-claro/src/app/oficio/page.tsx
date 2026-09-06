import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CotaLabel } from "@/components/cota-mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SunSection } from "@/components/sun-section";
import { principles, steps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Oficio",
  description:
    "Cómo trabaja COTA: predio, corte, permiso de edificación, obra y recepción final. NCh433, DOM, alero norte.",
};

export default function OficioPage() {
  return (
    <>
      <PageIntro
        cota="+3.20"
        kicker="Oficio"
        title="El permiso es el proyecto."
        lead="No hay un render que convenza a un talud. Hay un corte, una DOM, un sismo y un oficio que pone el cobre."
      />

      <section className="pb-20">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-serif text-[1.4rem] leading-snug italic">
              En Chile el sol entra por el norte. El alero se calcula para el 21
              de diciembre a las 14:00, latitud 33° S. El resto es sombra y
              materia.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">
              Trabajamos con informe de suelo, cálculo NCh433, especialidades y
              tramitación en la Dirección de Obras Municipales. El honorario se
              habla en UF. Si el encargo no cabe, se lo decimos antes de
              dibujar.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <SunSection />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-cal-2 py-20">
        <div className="shell">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Cinco cotas de trabajo.
            </h2>
          </Reveal>
          <ol className="mt-10">
            {steps.map((step, index) => (
              <Reveal key={step.cota} delay={index * 0.05}>
                <li className="grid gap-4 border-t border-line py-8 md:grid-cols-12">
                  <p className="font-mono nums text-[13px] tracking-wide text-cobre md:col-span-2">
                    {step.cota}
                  </p>
                  <h3 className="font-display text-3xl font-semibold tracking-tight md:col-span-3">
                    {step.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-muted md:col-span-7">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.06}
              className="bg-cal px-7 py-12"
            >
              <CotaLabel value={item.cota} />
              <h3 className="font-display mt-5 text-3xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-cal-2">
              <Image
                src="/images/materia.jpg"
                alt="Encuentro de cobre, yeso de cal y hormigón tabla"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-px bg-cobre" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <p className="kicker">Materia</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[0.94] tracking-tight">
              Cobre, cal, hormigón. Sin catálogo que finja.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">
              El cobre chileno se oxida a la vista. El yeso de cal se mancha. El
              hormigón tabla deja la huella de la madera. Entregamos un manual
              de materia con la llave, para que el edificio envejezca de
              acuerdo.
            </p>
            <Link
              href="/contacto"
              className="font-display mt-8 inline-flex h-12 items-center bg-cobre px-6 text-[0.9rem] font-semibold text-cal transition-colors hover:bg-cobre-deep"
            >
              Encargar un predio
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
