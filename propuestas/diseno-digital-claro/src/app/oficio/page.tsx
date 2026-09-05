import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { oficios } from "@/lib/oficio";
import { fees, method } from "@/lib/site";

export const metadata: Metadata = {
  title: "Oficio",
  description:
    "Identidad, producto, sitios y sistemas. El oficio de Nítida, estudio de diseño digital en Ñuñoa.",
};

export default function OficioPage() {
  return (
    <>
      <PageIntro
        kicker="Oficio"
        title="Cuatro maneras de componer."
        lead="Identidad, producto, sitios y sistemas. El mismo criterio en todas: que se lea a la primera, que un equipo pueda seguir, que se pueda defender en una mesa."
      />

      <section className="wrap pb-8">
        <ul className="grid gap-16 md:gap-24">
          {oficios.map((item, index) => (
            <Reveal as="li" key={item.slug} delay={index * 60}>
              <Link href={`/oficio/${item.slug}`} className="group grid gap-8 md:grid-cols-12">
                <div className="img-frame relative aspect-[16/11] md:col-span-6">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-col justify-between md:col-span-5 md:col-start-8 md:py-2">
                  <div>
                    <p className="eyebrow text-norte">{item.index}</p>
                    <h2 className="mt-3 font-display text-4xl tracking-[-0.03em] md:text-5xl">
                      {item.title}
                    </h2>
                    <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
                      {item.lead}
                    </p>
                  </div>
                  <p className="mt-8 text-sm tracking-[0.06em] text-norte">
                    Ver {item.title.toLowerCase()} →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="wrap py-24 md:py-32">
        <p className="eyebrow">Método</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl tracking-[-0.03em] md:text-5xl">
          Cómo entra un encargo.
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-4">
          {method.map((step, index) => (
            <Reveal as="li" key={step.index} delay={index * 80} className="border-t border-line pt-6">
              <p className="font-display text-3xl text-norte">{step.index}</p>
              <h3 className="mt-4 font-display text-2xl tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="mt-1 text-xs tracking-[0.14em] text-muted uppercase">
                {step.days}
              </p>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-foam/40">
        <div className="wrap py-20 md:py-28">
          <p className="eyebrow">Honorarios</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl tracking-[-0.03em] md:text-5xl">
            Cotizamos en UF, con IVA aparte.
          </h2>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {fees.map((fee) => (
              <li key={fee.name}>
                <p className="font-display text-3xl tracking-[-0.03em]">{fee.price}</p>
                <p className="mt-2 text-sm tracking-[0.08em] text-muted uppercase">
                  {fee.name}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{fee.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Cta />
    </>
  );
}
