import { cn } from "@/lib/cn";

export function PageIntro({
  kicker,
  title,
  lede,
  className,
}: {
  kicker: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <header className={cn("px-6 pb-12 pt-32 md:px-12 lg:px-16 lg:pb-16 lg:pt-40", className)}>
      <p className="kicker">{kicker}</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl font-light leading-[0.95] md:text-7xl">
        {title}
      </h1>
      {lede && (
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-parchment">
          {lede}
        </p>
      )}
    </header>
  );
}
