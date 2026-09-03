import { Container } from "@/components/layout/container";

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
    <section className="pt-28 pb-10 sm:pt-36 sm:pb-14">
      <Container>
        <p className="text-[0.72rem] tracking-[0.24em] uppercase text-lagoon">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {lead}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
