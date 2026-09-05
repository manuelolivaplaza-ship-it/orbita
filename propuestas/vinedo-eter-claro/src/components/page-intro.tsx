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
    <header className="shell pb-16 pt-32 md:pb-24 md:pt-40">
      <Reveal>
        <p className="kicker">{kicker}</p>
        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.8rem,8vw,6.4rem)] leading-[0.92] tracking-tight">
          {title}
        </h1>
        <p className="mt-8 max-w-[42ch] text-lg leading-relaxed text-tinta-suave">
          {lead}
        </p>
      </Reveal>
    </header>
  );
}
