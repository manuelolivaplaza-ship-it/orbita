import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function PageIntro({
  kicker,
  title,
  children,
  className,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("mx-auto max-w-[1600px] px-5 pt-32 pb-12 md:px-10 md:pt-40 md:pb-20", className)}>
      <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
        {kicker}
      </p>
      <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.6rem,7vw,6.4rem)] leading-[0.92] font-semibold tracking-[-0.03em] text-ivory">
        {title}
      </h1>
      {children ? (
        <div className="mt-8 max-w-xl text-[17px] leading-relaxed text-stone">
          {children}
        </div>
      ) : null}
    </header>
  );
}
