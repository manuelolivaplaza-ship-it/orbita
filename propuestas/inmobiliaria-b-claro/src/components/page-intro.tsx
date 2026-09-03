import { Reveal } from "@/components/reveal";
import { TitleBlock } from "@/components/title-block";

export function PageIntro({
  plate,
  kicker,
  title,
  lead,
  place = "La Reina",
}: {
  plate: string;
  kicker: string;
  title: string;
  lead: string;
  place?: string;
}) {
  return (
    <section className="pt-28 pb-10 lg:pt-36 lg:pb-14">
      <div className="shell">
        <Reveal>
          <TitleBlock plate={plate} place={place} extra={kicker} />
          <h1 className="font-display mt-8 max-w-[16ch] text-[clamp(2.7rem,7vw,5.6rem)] font-semibold leading-[0.92] tracking-tight">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            {lead}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
