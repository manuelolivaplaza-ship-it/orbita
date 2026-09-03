import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16",
        className
      )}
    >
      {children}
    </Tag>
  );
}
