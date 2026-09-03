import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { matters } from "@/lib/data";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Asuntos seleccionados de Estudio Alba. El trabajo, sin el nombre del cliente.",
};

export default function CasosPage() {
  return (
    <>
      <PageIntro
        overline="Asuntos seleccionados"
        title="El trabajo, sin el nombre."
      >
        <p>
          No publicamos clientes. Publicamos el tipo de problema, el tiempo que
          llevó y el resultado. Si necesita referencias, las damos en privado.
        </p>
      </PageIntro>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="divide-y divide-line border-y border-line">
            {matters.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.04}>
                <article className="grid gap-8 py-12 lg:grid-cols-12 lg:py-16">
                  <div className="lg:col-span-4">
                    <p className="text-[12px] tracking-[0.18em] text-muted-foreground uppercase">
                      {item.year} · {item.area}
                    </p>
                    <p className="stat-number mt-6 text-6xl lg:text-7xl">
                      {item.metric}
                      <span className="text-bronze">.</span>
                    </p>
                    <p className="mt-2 text-[12px] tracking-[0.14em] text-muted-foreground uppercase">
                      {item.metricLabel}
                    </p>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <h2 className="font-display text-3xl leading-snug tracking-tight lg:text-4xl">
                      {item.title}
                    </h2>
                    <p className="mt-5 text-[17px] leading-[1.75] text-muted-foreground">
                      {item.summary}
                    </p>
                    <p className="mt-5 text-[17px] leading-[1.75]">
                      <span className="text-muted-foreground">Resultado. </span>
                      {item.result}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-line pt-10 md:flex-row md:items-center">
            <p className="max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              Cada asunto de esta página está desidentificado. Los números son
              reales. Los nombres, no.
            </p>
            <ArrowLink href="/contacto">Hablar de un asunto</ArrowLink>
          </div>
        </Container>
      </section>
    </>
  );
}
