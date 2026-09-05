"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState(pathname);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (!open) {
        setHidden(y > lastY.current && y > 80);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  if (pathname !== route) {
    setRoute(pathname);
    setOpen(false);
    setHidden(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 text-tinta transition-transform duration-500",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
        scrolled || open ? "nav-blur border-b border-linea/70" : "",
      )}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Principal">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
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

        <div className="flex items-center gap-5">
          <a
            href={site.phoneHref}
            className="link-line hidden font-mono text-[0.62rem] uppercase tracking-[0.22em] nums xl:inline"
          >
            {site.phone}
          </a>
          <Link href="/agenda" className="btn btn-ink hidden px-5 py-2 text-[0.62rem] sm:inline-flex">
            Agendar hora
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
          "fixed inset-0 z-30 bg-papel text-tinta transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between">
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-5xl font-light tracking-tight"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/agenda" className="btn btn-ink mt-6 w-fit">
            Agendar hora
          </Link>
          <a href={site.phoneHref} className="font-mono text-[0.62rem] uppercase tracking-[0.22em] nums">
            {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
