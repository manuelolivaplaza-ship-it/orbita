import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  copper:
    "bg-copper text-bg hover:bg-copper-bright border border-copper hover:border-copper-bright",
  outline:
    "bg-transparent text-ivory border border-ivory/25 hover:border-copper hover:text-copper",
  ghost: "bg-transparent text-ivory hover:text-copper border border-transparent",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "copper",
  className,
  external,
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-3 px-7 py-3.5 font-mono text-[0.68rem] uppercase tracking-[0.28em] transition-colors duration-500",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
