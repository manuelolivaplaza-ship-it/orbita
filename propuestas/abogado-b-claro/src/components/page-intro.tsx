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
    <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="shell">
        <Reveal>
          <p className="kicker">{kicker}</p>
          <h1 className="font-display mt-4 max-w-[16ch] text-[clamp(2.6rem,7vw,5.4rem)] font-bold leading-[0.92] tracking-tight">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">{lead}</p>
        </Reveal>
      </div>
    </section>
  );
}
