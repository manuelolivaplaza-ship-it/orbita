import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ArrowLink({
  href,
  children,
  className,
  light = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase",
        light ? "text-paper" : "text-ink",
        className
      )}
    >
      <span className="link-underline">{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-500 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
