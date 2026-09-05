"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

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
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-700",
          scrolled || open
            ? "bg-bg/80 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="flex items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <Logo compact />

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-[0.62rem] uppercase tracking-[0.28em] transition-colors duration-300",
                  pathname === item.href
                    ? "text-copper"
                    : "text-ivory-soft hover:text-ivory",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/visita"
              className="hidden border border-copper/70 px-5 py-2.5 font-mono text-[0.6rem] tracking-[0.28em] text-copper uppercase transition-colors duration-500 hover:bg-copper hover:text-bg sm:inline-flex"
            >
              Reservar visita
            </Link>
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              <span
                className={cn(
                  "absolute h-px w-5 bg-ivory transition-transform duration-500",
                  open ? "translate-y-0 rotate-45" : "-translate-y-1.5",
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-5 bg-ivory transition-opacity duration-300",
                  open ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-5 bg-ivory transition-transform duration-500",
                  open ? "translate-y-0 -rotate-45" : "translate-y-1.5",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between bg-bg px-6 pt-28 pb-10 transition-[opacity,transform] duration-700 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-2">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-serif text-5xl tracking-tight text-ivory"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/visita"
            className="mt-6 font-serif text-5xl tracking-tight text-copper"
          >
            Reservar visita
          </Link>
        </nav>
        <p className="font-mono text-[0.62rem] tracking-[0.28em] text-muted uppercase">
          {site.address} · {site.comuna}
        </p>
      </div>
    </>
  );
}
