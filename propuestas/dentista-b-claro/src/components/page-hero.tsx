import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="pt-16 pb-10 sm:pt-24 sm:pb-14">
      <Container>
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.22em] uppercase text-sage">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-6xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {lead}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
