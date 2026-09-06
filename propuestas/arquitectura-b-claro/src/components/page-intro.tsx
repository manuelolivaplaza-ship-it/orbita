import { CotaLabel } from "@/components/cota-mark";
import { Reveal } from "@/components/reveal";

export function PageIntro({
  cota,
  kicker,
  title,
  lead,
}: {
  cota: string;
  kicker: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="pt-28 pb-10 lg:pt-36 lg:pb-14">
      <div className="shell">
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-line pb-4">
            <p className="kicker">{kicker}</p>
            <CotaLabel value={cota} align="right" />
          </div>
          <h1 className="font-display mt-8 max-w-[14ch] text-[clamp(2.8rem,7.2vw,5.8rem)] font-semibold leading-[0.9] tracking-tight">
            {title}
          </h1>
          <p className="font-serif mt-6 max-w-xl text-[1.25rem] leading-relaxed text-muted italic">
            {lead}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
