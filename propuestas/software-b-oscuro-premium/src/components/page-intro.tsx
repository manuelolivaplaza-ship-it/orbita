export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="frame grid gap-6 pb-12 pt-10 md:grid-cols-12 md:gap-8 md:pb-16 md:pt-14">
      <p className="kicker md:col-span-3 md:pt-3">{kicker}</p>
      <div className="md:col-span-9">
        <h1 className="display text-[clamp(2.6rem,7vw,5.4rem)]">{title}</h1>
        <p className="mt-6 max-w-[42ch] text-[1.08rem] leading-[1.7] text-niebla">
          {lede}
        </p>
      </div>
    </header>
  );
}
