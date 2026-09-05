"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Clock } from "@/components/clock";
import { Logo } from "@/components/mark";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-amber focus:px-3 focus:py-2 focus:text-[#1a1408]"
      >
        Saltar al contenido
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled || open ? "bg-bg/80 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="pad flex h-[4.25rem] items-center justify-between">
          <Link
            href="/"
            aria-label="NOCTUA, inicio"
            className="relative z-10"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "kicker transition-colors hover:text-amber-2",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-amber"
                    : "text-mute",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Clock />
            <Link href="/cita" className="btn btn-solid hidden sm:inline-flex">
              Cita
            </Link>
            <button
              type="button"
              className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menú</span>
              <span className="flex w-6 flex-col gap-1.5">
                <span
                  className={cn(
                    "block h-px bg-ink transition-transform",
                    open && "translate-y-[4px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "block h-px bg-ink transition-transform",
                    open && "-translate-y-[4px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
        <div className="rule" />
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-bg pt-[4.25rem] transition-opacity duration-500 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="pad flex h-full flex-col justify-between py-10">
          <ul className="space-y-2">
            {nav.map((item, i) => (
              <li key={item.href} style={{ animationDelay: `${i * 80}ms` }}>
                <Link
                  href={item.href}
                  className="display block text-[12vw] text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/cita"
                className="display block text-[12vw] text-amber"
                onClick={() => setOpen(false)}
              >
                Cita
              </Link>
            </li>
          </ul>
          <p className="kicker pb-8">
            {site.address}
            <br />
            {site.whatsapp}
          </p>
        </nav>
      </div>
    </>
  );
}
