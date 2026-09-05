import Link from "next/link";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex items-center gap-3 text-ink"
      aria-label="ETER, inicio"
    >
      <span className="relative grid h-7 w-7 place-items-center" aria-hidden>
        <span className="absolute inset-0 rounded-full border border-ink/80" />
        <span className="absolute inset-[5px] rounded-full border border-ether/70" />
      </span>
      <span className="font-ui text-[0.92rem] font-medium tracking-[0.34em]">
        ETER
      </span>
    </Link>
  );
}
