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
      className={cn(
        "group flex items-center gap-2.5",
        inverted ? "text-primary-foreground" : "text-foreground",
        className,
      )}
      aria-label="Olivo, inicio"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-500 group-hover:rotate-[-8deg]"
      >
        <path
          d="M16.2 3.2c-4.8 6.4-7.4 12.2-7.4 17.1 0 4.6 3.2 8.1 7.4 8.1s7.4-3.5 7.4-8.1c0-4.9-2.6-10.7-7.4-17.1Z"
          fill={inverted ? "#F7F5F0" : "#1F4A3C"}
        />
        <path
          d="M16.2 7.4c.15 4.8.15 9.2 0 16.2"
          stroke={inverted ? "#1F4A3C" : "#F7F5F0"}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M16.2 14.2c2.4-1.2 4.2-1.4 6.2-.6"
          stroke={inverted ? "#1F4A3C" : "#E7EEEA"}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-heading text-[1.45rem] leading-none tracking-tight">
        Olivo
      </span>
    </Link>
  );
}
