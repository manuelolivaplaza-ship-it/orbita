"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import { cn } from "@/lib/cn";
import { Wordmark } from "./mark";

export function Header() {
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

  const darkHero = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled || open || !darkHero
            ? "bg-[#070706]/88 backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link href="/" aria-label="Obsidiana, inicio">
            <Wordmark />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link",
                  pathname.startsWith(item.href) && "is-active",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/visita" className="btn-gold hidden sm:inline-flex">
              Visita privada
            </Link>
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={cn(
                  "absolute h-px w-6 bg-gold transition-transform duration-500",
                  open ? "rotate-45" : "-translate-y-1.5",
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-6 bg-gold transition-transform duration-500",
                  open ? "-rotate-45" : "translate-y-1.5",
                )}
              />
            </button>
          </div>
        </div>
        <div
          className={cn(
            "h-px w-full origin-left bg-[var(--line-gold)] transition-opacity duration-500",
            scrolled || !darkHero ? "opacity-100" : "opacity-0",
          )}
        />
      </header>

      {open ? (
        <div className="menu-overlay fixed inset-0 z-30 bg-[#070706] lg:hidden">
          <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
            <nav className="flex flex-col gap-2">
              {nav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-display text-5xl italic leading-none text-ivory"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/visita"
                className="mt-6 font-display text-5xl italic leading-none text-gold"
              >
                Visita privada
              </Link>
            </nav>
            <p className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
              Vitacura · Santiago · Chile
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
