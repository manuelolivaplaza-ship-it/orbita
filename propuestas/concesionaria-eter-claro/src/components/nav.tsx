"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const light = isHome && !scrolled && !open;

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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        light ? "text-paper" : "text-ink",
        !light && "nav-blur border-b border-line/70",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
        <Logo />

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Principal">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "link-line font-mono text-[0.64rem] uppercase tracking-[0.28em]",
                  active ? "opacity-100" : "opacity-70 hover:opacity-100",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/visita"
            className={cn(
              "hidden btn px-5 py-2 text-[0.62rem] sm:inline-flex",
              light ? "btn-light" : "btn-gold",
            )}
          >
            Agendar visita
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menú</span>
            <span className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-current transition-transform duration-500",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-300",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-current transition-transform duration-500",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        className={cn(
          "fixed inset-0 z-30 bg-paper text-ink transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-[4.5rem] items-center justify-between px-6">
          <Logo />
          <button
            type="button"
            className="font-mono text-[0.62rem] uppercase tracking-[0.28em]"
            onClick={() => setOpen(false)}
          >
            Cerrar
          </button>
        </div>
        <nav className="flex flex-col gap-8 px-6 pt-10" aria-label="Móvil">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-5xl font-light tracking-tight"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/visita" className="btn btn-gold mt-6 w-fit">
            Agendar visita
          </Link>
        </nav>
      </div>
    </header>
  );
}
