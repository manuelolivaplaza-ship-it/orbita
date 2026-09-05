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
      <div className="marquee-track gap-10 py-1 pr-10">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 text-[0.78rem] tracking-[0.18em] text-muted uppercase"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-norte/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
