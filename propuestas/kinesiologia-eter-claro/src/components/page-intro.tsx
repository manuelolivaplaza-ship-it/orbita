import { Reveal } from "@/components/reveal";

export function PageIntro({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="shell pb-16 pt-32 md:pb-20 md:pt-40">
      <Reveal>
        <p className="kicker">{kicker}</p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,7vw,6.4rem)] font-light leading-[0.9] tracking-tight">
          {title}
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-tinta-suave">
          {lead}
        </p>
      </Reveal>
    </section>
  );
}
