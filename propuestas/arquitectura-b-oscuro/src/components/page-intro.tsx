export function PageIntro({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="border-b border-line pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="shell">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-4 max-w-[16ch] font-display text-5xl leading-[0.92] tracking-tight sm:text-7xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-xl text-sm leading-7 text-paper-dim sm:text-[1.02rem]">
            {lead}
          </p>
        ) : null}
      </div>
    </header>
  );
}
