import Link from "next/link";
import { site } from "@/lib/site";

export function EmergencyBar() {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 river-band text-primary-foreground">
      <div className="mx-auto flex h-8 max-w-[1180px] items-center justify-between gap-3 px-5 text-[0.68rem] tracking-[0.14em] uppercase sm:px-8 sm:text-[0.7rem]">
        <Link href="/urgencias" className="truncate hover:opacity-80">
          Urgencias 24 h · Isla Teja
        </Link>
        <a href={site.phoneHref} className="shrink-0 font-medium tracking-[0.08em]">
          {site.phoneIntl}
        </a>
      </div>
    </div>
  );
}
