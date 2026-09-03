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
        <path
          d="M9 1.2C6.2 5.4 5.6 8.6 9 12.2C12.4 8.6 11.8 5.4 9 1.2Z"
          fill="var(--copper)"
          className="origin-bottom transition-opacity duration-300 group-hover:opacity-90"
        />
        <rect x="8.15" y="12" width="1.7" height="13" fill="currentColor" opacity="0.85" />
      </svg>
      <span
        className={`font-display tracking-[-0.03em] leading-none ${
          compact ? "text-[1.2rem]" : "text-[1.35rem]"
        }`}
      >
        {site.name}
      </span>
    </Link>
  );
}
