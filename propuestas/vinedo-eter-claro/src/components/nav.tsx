"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/components/cart";
import { Logo } from "@/components/logo";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";

export function Nav() {
  const pathname = usePathname();
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [pathSeen, setPathSeen] = useState(pathname);
  const lastY = useRef(0);

  if (pathSeen !== pathname) {
    setPathSeen(pathname);
    setOpen(false);
    setHidden(false);
  }

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

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
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

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/seleccion"
            className="font-mono text-[0.62rem] uppercase tracking-[0.22em] opacity-80 hover:opacity-100"
          >
            Selección{count > 0 ? ` (${count})` : ""}
          </Link>
          <Link
            href="/visitas"
            className="btn btn-ink hidden px-5 py-2 text-[0.62rem] sm:inline-flex"
          >
            Reservar
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
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
        <div className="shell flex h-full flex-col justify-end pb-24 pt-28">
          <nav className="flex flex-col gap-6" aria-label="Móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-5xl tracking-tight"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/seleccion"
              className="font-display text-5xl tracking-tight"
              onClick={() => setOpen(false)}
            >
              Selección
            </Link>
          </nav>
          <Link
            href="/visitas"
            className="btn btn-ink mt-12 w-max"
            onClick={() => setOpen(false)}
          >
            Reservar visita
          </Link>
        </div>
      </div>
    </header>
  );
}
