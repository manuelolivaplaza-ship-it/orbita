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
          d="M9 1 L17 11.5 L9 25 L1 11.5 Z"
          fill="var(--ember)"
          className="origin-center transition-opacity duration-300 group-hover:opacity-90"
        />
        <path d="M9 1 L9 25" stroke="var(--void)" strokeWidth="0.8" />
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
