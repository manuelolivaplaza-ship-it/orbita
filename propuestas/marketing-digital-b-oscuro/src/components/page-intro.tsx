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
        <h1 className="mt-5 max-w-[14ch] text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.84] text-balance">
          {title}
        </h1>
        {lede ? (
          <p className="font-serif mt-6 max-w-[40ch] text-[1.08rem] leading-relaxed text-paper-dim">
            {lede}
          </p>
        ) : null}
      </Reveal>
    </header>
  );
}
