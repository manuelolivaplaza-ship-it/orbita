import { Reveal } from "@/components/reveal";

export function PageIntro({
  folio,
  kicker,
  title,
  lede,
}: {
  folio?: string;
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="border-b border-line pb-12 pt-10 sm:pb-16 sm:pt-14">
      <Reveal>
        <p className="kicker">
          {folio ? (
            <span className="tabular mr-3 text-muted">{folio}</span>
          ) : null}
          {kicker}
        </p>
        <h1 className="mt-5 max-w-[16ch] text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.92] text-balance">
          {title}
        </h1>
        {lede ? (
          <p className="mt-6 max-w-[42ch] text-[1.05rem] leading-relaxed text-paper-dim">
            {lede}
          </p>
        ) : null}
      </Reveal>
    </header>
  );
}
