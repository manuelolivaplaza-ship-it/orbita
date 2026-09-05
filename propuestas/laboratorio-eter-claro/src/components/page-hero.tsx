import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

export function PageHero({
  kicker,
  title,
  lead,
  compact = false,
}: {
  kicker: string;
  title: string;
  lead?: string;
  compact?: boolean;
}) {
  return (
    <header className={cn("wrap pt-32", compact ? "pb-10" : "pb-16 md:pb-20")}>
      <Reveal>
        <p className="eyebrow">{kicker}</p>
        <h1 className="display mt-5 max-w-4xl text-[clamp(2.8rem,8vw,6.4rem)] text-ink">
          {title}
        </h1>
        {lead ? (
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {lead}
          </p>
        ) : null}
      </Reveal>
    </header>
  );
}
