import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { services } from "@/data/content";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "El oficio",
  description:
    "Seis enfoques de kinesiología en ETER: traumatológica, deportiva, neurológica, respiratoria, domicilio y evaluación.",
};

export default function OficioPage() {
  return (
    <>
      <PageIntro
        kicker="El oficio"
        title="Seis maneras de volver a moverte."
        lead="No somos un mall de especialidades. Somos un equipo que se habla. El enfoque se elige en la evaluación, no en un banner."
      />

      <section className="pb-24 lg:pb-36">
        <div className="shell grid gap-16">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 40}>
              <article className="grid items-start gap-8 border-t border-linea pt-10 lg:grid-cols-12">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-teal lg:col-span-1">
                  {service.n}
                </p>
                <div className="lg:col-span-6">
                  <h2 className="font-display text-4xl font-light tracking-tight md:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-tinta-suave">
                    {service.lead}
                  </p>
                  <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gris">
                    {service.duration} · desde {formatCLP(service.priceFrom)}
                  </p>
                  <Link
                    href={`/oficio/${service.slug}`}
                    className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
                  >
                    Leer el enfoque
                    <Arrow />
                  </Link>
                </div>
                <div className="frame relative aspect-[4/3] lg:col-span-5">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
