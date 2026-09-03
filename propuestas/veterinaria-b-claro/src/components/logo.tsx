import Link from "next/link";

import { cn } from "@/lib/utils";

function SunMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cn("text-primary", className)}
    >
      <circle cx="20" cy="17" r="8.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6 27.5h28"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M20 6.5v2.2M31.2 11.2l-1.6 1.6M8.8 11.2l1.6 1.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Alba, inicio"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <SunMark className="size-8 shrink-0 transition-transform duration-500 group-hover:rotate-6" />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[1.45rem] italic tracking-tight text-foreground">
          Alba
        </span>
        {!compact && (
          <span className="mt-1 hidden text-[0.62rem] font-medium tracking-[0.2em] text-muted-foreground uppercase sm:block">
            Clínica veterinaria
          </span>
        )}
      </span>
    </Link>
  );
}

export { SunMark };
