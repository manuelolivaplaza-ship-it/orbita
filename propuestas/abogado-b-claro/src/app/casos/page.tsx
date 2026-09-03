import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { matters } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuntos",
  description:
    "Asuntos seleccionados de ATRIO, sin el nombre del cliente. Laboral, familia, inmobiliario, civil y empresa en Santiago.",
};

export default function CasosPage() {
  return (
    <>
      <PageIntro
        kicker="Asuntos"
        title="El trabajo, sin el nombre del cliente."
        lead="Publicamos resultados que se pueden decir. Los nombres, no. Un resultado no se promete: se trabaja. Estos son caminos que ya se recorrieron."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-x-10 gap-y-16 md:grid-cols-2">
          {matters.map((item, index) => (
            <Reveal key={item.slug} delay={(index % 2) * 0.06}>
              <article className="flex h-full flex-col border-t border-line pt-8">
                <p className="text-[12px] tracking-[0.16em] text-muted uppercase">
                  {item.year} · {item.area} · {item.comuna}
                </p>
                <p className="font-display nums mt-6 text-6xl font-bold tracking-tight lg:text-7xl">
                  {item.metric}
                  <span className="text-barro">.</span>
                </p>
                <p className="mt-1 text-[12px] tracking-[0.14em] text-muted uppercase">
                  {item.metricLabel}
                </p>
                <h2 className="font-display mt-8 text-2xl font-bold leading-snug tracking-tight lg:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-4 flex-1 text-[16px] leading-relaxed text-muted">
                  {item.summary}
                </p>
                <p className="mt-5 text-[15px] text-ink">{item.result}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="shell mt-16 max-w-xl text-[14px] leading-relaxed text-muted">
          Los montos y plazos corresponden a asuntos cerrados. No constituyen
          oferta ni garantía de resultado. Cada expediente tiene su propio
          Conservador, su propio tribunal y su propia suerte.
        </p>
      </section>
    </>
  );
}
