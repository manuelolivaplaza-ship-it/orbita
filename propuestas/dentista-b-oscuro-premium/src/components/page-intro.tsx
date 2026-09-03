import { Container } from "@/components/layout/container";

export function PageIntro({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-line pt-16 pb-12 sm:pt-24 sm:pb-16">
      <Container>
        <p className="kicker">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[0.95] tracking-tight text-balance">
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
