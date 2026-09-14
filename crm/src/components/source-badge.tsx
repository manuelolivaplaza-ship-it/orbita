import { SOURCE_LABEL } from "@/lib/constants";
import { isInboundSource } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SourceBadge({
  source,
  className,
}: {
  source: string | null | undefined;
  className?: string;
}) {
  if (!source) return null;
  const inbound = isInboundSource(source);
  const label = SOURCE_LABEL[source] ?? source;
  return (
    <span
      className={cn(
        "inline-flex h-5 items-center rounded-full px-1.5 font-mono text-[10px] uppercase tracking-wide ring-1 ring-inset",
        inbound
          ? "bg-emerald-500/15 text-emerald-300 ring-emerald-500/25"
          : "bg-muted text-muted-foreground ring-foreground/10",
        className,
      )}
    >
      {label}
    </span>
  );
}
