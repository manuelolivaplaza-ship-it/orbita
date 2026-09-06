import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 text-paper"
      aria-label={`${site.name}, inicio`}
    >
      <span className="led led-live" aria-hidden />
      <span
        className={`font-display tracking-[-0.04em] leading-none ${
          compact ? "text-[1.35rem]" : "text-[1.55rem]"
        }`}
      >
        {site.name}
      </span>
    </Link>
  );
}
