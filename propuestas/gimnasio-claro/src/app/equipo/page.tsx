import type { Metadata } from "next";
import { Container, Section } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { coaches } from "@/lib/data";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Patricia, Camila, Andrés, Emilia y Tomás. El equipo de ALBA en Lo Barnechea.",
};

export default function EquipoPage() {
  const [director, ...rest] = coaches;

  return (
    <>
      <PageHero
        kicker="Quienes te ven"
        title="Cinco oficios, una misma casa."
        lead="No hay pantallas con rutinas genéricas. Hay gente que te conoce el nombre, la rodilla y el día difícil."
      />

      <Container className="grid items-center gap-10 pb-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <Photo
            src={director.image}
            alt={`Retrato de ${director.name}`}
            className="aspect-[4/5]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </Reveal>
        <Reveal delay={1} className="lg:col-span-5 lg:col-start-8">
          <p className="kicker">{director.role}</p>
          <h2 className="mt-4 font-display text-5xl tracking-tight">
            {director.name}
          </h2>
          <p className="mt-2 text-sm text-ink-soft">{director.focus}</p>
          <blockquote className="mt-8 font-display text-2xl italic leading-snug tracking-tight">
            “{director.quote}”
          </blockquote>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">
            {director.bio}
          </p>
        </Reveal>
      </Container>

      <Section className="border-t border-line pt-16">
        <Container className="grid gap-16">
          {rest.map((coach, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={coach.slug}
                className="grid items-center gap-10 lg:grid-cols-12"
              >
                <Reveal className={reverse ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5"}>
                  <Photo
                    src={coach.image}
                    alt={`Retrato de ${coach.name}`}
                    className="aspect-[3/4]"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </Reveal>
                <Reveal
                  delay={1}
                  className={
                    reverse
                      ? "lg:col-span-5 lg:col-start-1 lg:row-start-1"
                      : "lg:col-span-5 lg:col-start-7"
                  }
                >
                  <p className="kicker">{coach.role}</p>
                  <h2 className="mt-3 font-display text-4xl tracking-tight">
                    {coach.name}
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">{coach.focus}</p>
                  <blockquote className="mt-6 font-display text-xl italic tracking-tight">
                    “{coach.quote}”
                  </blockquote>
                  <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">
                    {coach.bio}
                  </p>
                </Reveal>
              </article>
            );
          })}
        </Container>
      </Section>

      <CtaBand title="Ven a conocer al equipo." />
    </>
  );
}
