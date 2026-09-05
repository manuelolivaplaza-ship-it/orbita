import { cn } from "@/lib/cn";

export function SectionHead({
  kicker,
  title,
  aside,
  className,
}: {
  kicker: string;
  title: string;
  aside?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-6 md:flex-row md:items-end",
        className,
      )}
    >
      <div>
        <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
          {kicker}
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.05] font-semibold tracking-tight text-ivory">
          {title}
        </h2>
      </div>
      {aside ? (
        <p className="max-w-sm text-sm text-stone md:text-right">{aside}</p>
      ) : null}
    </div>
  );
}
