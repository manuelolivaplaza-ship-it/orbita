"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { nav } from "@/data/site";
import { cn } from "@/lib/cn";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={cn("nav-shell", scrolled && "is-scrolled")}>
        <div className="wrap-wide flex h-[4.4rem] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[0.78rem] tracking-[0.12em] uppercase no-underline transition-colors",
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "text-ink"
                    : "text-mute hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/contacto" className="btn btn-ink hidden sm:inline-flex">
              Agendar hora
            </Link>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">Menú</span>
              <span className="relative block h-3 w-6">
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-ink transition-transform duration-400",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1.5 h-px w-full bg-ink transition-opacity duration-400",
                    open ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-ink transition-transform duration-400",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-paper transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-3" aria-label="Móvil">
            {nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="display text-[14vw] leading-none text-ink no-underline sm:text-6xl"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4">
            <Link href="/contacto" className="btn btn-ink w-full">
              Agendar hora
            </Link>
            <p className="eyebrow">Santiago · lun a sáb</p>
          </div>
        </div>
      </div>
    </>
  );
}
