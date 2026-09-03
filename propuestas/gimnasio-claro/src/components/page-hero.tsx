import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export function PageHero({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead: string;
}) {
  return (
    <Container className="pt-16 pb-10 sm:pt-24 sm:pb-14">
      <Reveal>
        <p className="kicker">{kicker}</p>
        <h1 className="mt-5 max-w-4xl font-display text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
          {lead}
        </p>
      </Reveal>
    </Container>
  );
}
