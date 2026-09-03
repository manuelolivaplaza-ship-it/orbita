import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { matters } from "@/lib/data";

export const metadata: Metadata = {
  title: "La libreta",
  description:
    "Asuntos de CLARO, sin el nombre del cliente. Regularizaciones, SpA, honorarios y remuneraciones.",
};

export default function CasosPage() {
  return (
    <>
      <PageIntro
        kicker="La libreta"
        title="El trabajo, sin el nombre del cliente."
        lead="No publicamos marcas. Publicamos el oficio: qué llegó, qué se hizo, qué número quedó. Sin promesas de que a usted le va a pasar lo mismo."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-x-10 gap-y-16 lg:grid-cols-2">
          {matters.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.06}>
              <article className="flex h-full flex-col border-t border-line pt-8">
                <p className="text-[12px] tracking-[0.16em] text-muted uppercase">
                  {item.year} · {item.area} · {item.comuna}
                </p>
                <p className="font-display nums mt-6 text-6xl font-medium tracking-tight">
                  {item.metric}
                  <span className="text-cobre">.</span>
                </p>
                <p className="mt-1 text-[12px] tracking-[0.14em] text-muted uppercase">
                  {item.metricLabel}
                </p>
                <h2 className="font-display mt-7 text-3xl font-medium leading-snug tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-muted">
                  {item.summary}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed">
                  {item.result}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="shell mt-16">
          <Link
            href="/contacto"
            className="inline-flex h-12 items-center bg-cobre px-6 text-[0.9rem] font-semibold tracking-wide text-luz hover:bg-cobre-deep"
          >
            Traiga el suyo
          </Link>
        </div>
      </section>
    </>
  );
}
