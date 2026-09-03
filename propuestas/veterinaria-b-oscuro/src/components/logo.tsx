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
          d="M9 1.2V6.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M4.2 10.4C4.2 7.8 6.3 6.4 9 6.4C11.7 6.4 13.8 7.8 13.8 10.4C13.8 12.2 12.6 13.4 11.2 14.6L9.6 16V20.2H8.4V16L6.8 14.6C5.4 13.4 4.2 12.2 4.2 10.4Z"
          fill="var(--lantern)"
        />
        <rect x="7.2" y="20.2" width="3.6" height="1.4" fill="currentColor" opacity="0.85" />
        <rect x="5.6" y="21.6" width="6.8" height="1.2" fill="currentColor" opacity="0.55" />
      </svg>
      <span
        className={`font-display tracking-[-0.03em] leading-none ${
          compact ? "text-[1.2rem]" : "text-[1.38rem]"
        }`}
      >
        {site.name}
      </span>
    </Link>
  );
}
