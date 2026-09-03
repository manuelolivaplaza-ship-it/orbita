import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 text-paper"
      aria-label={`${site.name}, inicio`}
    >
      <svg
        width="18"
        height="26"
        viewBox="0 0 18 26"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <circle cx="9" cy="9" r="7.2" stroke="var(--brass)" strokeWidth="1.2" />
        <line
          x1="9"
          y1="1.2"
          x2="9"
          y2="24.8"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="9" cy="9" r="1.6" fill="var(--brass)" />
      </svg>
      <span
        className={`font-display tracking-[-0.03em] leading-none ${
          compact ? "text-[1.2rem]" : "text-[1.4rem]"
        }`}
      >
        {site.name}
      </span>
    </Link>
  );
}
