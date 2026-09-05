import { cn } from "@/lib/utils";

export function PageIntro({
  kicker,
  title,
  lead,
  className,
}: {
  kicker: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <section className={cn("wrap pb-10 pt-12 md:pb-14 md:pt-20", className)}>
      <p className="eyebrow">{kicker}</p>
      <h1 className="display mt-5 max-w-[16ch] text-[clamp(3rem,8vw,6.4rem)]">
        {title}
      </h1>
      {lead ? (
        <p className="mt-8 max-w-xl text-[1.12rem] leading-[1.7] text-muted">
          {lead}
        </p>
      ) : null}
    </section>
  );
}
