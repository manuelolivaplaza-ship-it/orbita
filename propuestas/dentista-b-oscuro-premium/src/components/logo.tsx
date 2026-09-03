import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Obsidiana, inicio"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
        <path
          d="M12 2.5 L20 12 L12 21.5 L4 12 Z"
          fill={inverted ? "#121110" : "#C8A88A"}
        />
        <path
          d="M12 6.2 L16.6 12 L12 17.8 L7.4 12 Z"
          fill={inverted ? "#EDE8E0" : "#121110"}
        />
      </svg>
      <span
        className={cn(
          "font-display text-[1.05rem] leading-none tracking-[0.22em]",
          inverted ? "text-carbon" : "text-foreground"
        )}
      >
        OBSIDIANA
      </span>
    </Link>
  );
}
