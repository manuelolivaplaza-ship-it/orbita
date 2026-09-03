import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { spaces } from "@/lib/data";

export const metadata: Metadata = {
  title: "Espacios",
  description:
    "Salón, fuerza, reforma, terraza, frío y café. Un club de 850 m² abierto a la luz de Lo Barnechea.",
};

export default function EspaciosPage() {
  return (
    <>
      <PageHero
        kicker="El recinto"
        title="Ocho espacios, una misma luz."
        lead="El club se recorre como una casa: el salón, las salas de trabajo, la terraza al valle, el cuarto de frío y un café que huele a cobre y lúcuma."
      />

      <Container className="pb-8">
        <Photo
          src="/images/lobby.jpg"
          alt="Recepción de ALBA con mesón de travertino y lámpara de cobre"
          className="aspect-[16/8] min-h-[240px]"
          sizes="100vw"
          priority
          caption="La recepción. El mesón es de travertino; la lámpara, de cobre chileno."
        />
      </Container>

      <div className="pb-24">
        {spaces.map((space, index) => {
          const reverse = index % 2 === 1;
          return (
            <article
              key={space.slug}
              id={space.slug}
              className="border-t border-line py-16 sm:py-24"
            >
              <Container className="grid items-center gap-10 lg:grid-cols-12">
                <Reveal className={reverse ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-6"}>
                  <Photo
                    src={space.image}
                    alt={space.name}
                    className="aspect-[4/3]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </Reveal>
                <Reveal
                  delay={1}
                  className={
                    reverse
                      ? "lg:col-span-5 lg:col-start-1 lg:row-start-1"
                      : "lg:col-span-5 lg:col-start-8"
                  }
                >
                  <p className="kicker">{space.kicker}</p>
                  <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                    {space.name}
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">{space.area}</p>
                  <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">
                    {space.details}
                  </p>
                </Reveal>
              </Container>
            </article>
          );
        })}
      </div>

      <CtaBand title="Pide un recorrido." text="Te mostramos las salas en 40 minutos, a la hora que te acomode. Ven con zapatilla, o sin ella: el piso se recorre igual." />
    </>
  );
}
