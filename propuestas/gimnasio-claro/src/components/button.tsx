import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  solid:
    "bg-copper text-cream hover:bg-copper-deep",
  ghost:
    "border border-ink/15 bg-transparent text-ink hover:border-copper hover:text-copper",
  cream:
    "bg-cream text-ink hover:bg-white",
} as const;

type Variant = keyof typeof variants;

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300";

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const classes = cn(base, variants[variant], className);

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

export function Button({
  children,
  variant = "solid",
  className,
  type = "button",
  disabled,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        base,
        variants[variant],
        "disabled:cursor-wait disabled:opacity-60",
        className,
      )}
    >
      {children}
    </button>
  );
}
