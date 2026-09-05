import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  const loop = [...items, ...items];
  return (
    <div className={cn("overflow-hidden", className)} aria-hidden>
      <div className="marquee-track flex w-max">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center px-6 text-[0.78rem] font-semibold tracking-[0.22em] uppercase"
          >
            {item}
            <span className="ml-6 inline-block h-1.5 w-1.5 rounded-full bg-ink/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
