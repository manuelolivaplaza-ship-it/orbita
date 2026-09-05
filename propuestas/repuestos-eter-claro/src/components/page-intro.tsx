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
    <header className="border-b border-line pt-28 pb-12 lg:pt-36 lg:pb-16">
      <div className="shell max-w-3xl">
        <p className="kicker">{kicker}</p>
        <h1 className="font-display mt-5 text-[clamp(2.8rem,7vw,5.6rem)] font-normal leading-[0.92] tracking-tight">
          {title}
        </h1>
        <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-muted">
          {lead}
        </p>
      </div>
    </header>
  );
}
