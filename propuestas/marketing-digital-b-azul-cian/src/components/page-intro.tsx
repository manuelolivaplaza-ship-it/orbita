import { Reveal } from "@/components/reveal";

export function PageIntro({
  mark,
  title,
  lead,
}: {
  mark: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="shell">
        <Reveal>
          <p className="mark">{mark}</p>
          <h1 className="font-display mt-4 max-w-[16ch] text-[clamp(2.6rem,7vw,5.2rem)] font-medium leading-[0.94] tracking-tight">
            {title}
          </h1>
          <div className="rule mt-7 w-16" />
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            {lead}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
