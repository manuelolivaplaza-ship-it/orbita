import { cn } from "@/lib/utils";

export function CotaLabel({
  value,
  className,
  align = "left",
}: {
  value: string;
  className?: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "font-mono nums flex items-center gap-2 text-[11px] tracking-wide text-muted",
        align === "right" && "flex-row-reverse",
        className
      )}
    >
      <span
        aria-hidden
        className="inline-block h-0 w-0 border-x-[5px] border-b-[8px] border-x-transparent border-b-cobre"
      />
      <span>{value}</span>
    </div>
  );
}

export function Datum({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-px w-full bg-cobre", className)} aria-hidden>
      <span className="absolute top-1/2 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-cobre" />
    </div>
  );
}
