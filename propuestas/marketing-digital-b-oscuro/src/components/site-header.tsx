"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  const onHero = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300",
        onHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line bg-void/92 backdrop-blur-md"
      )}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-[0.72rem] tracking-[0.14em] uppercase text-muted transition-colors duration-200 hover:text-paper",
                  active && "text-paper"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className="tabular text-[0.86rem] text-paper transition-colors hover:text-carrier"
          >
            {site.phone}
          </a>
          <Link href="/lectura" className="btn btn-primary !min-h-10 !px-5">
            Pedir lectura
          </Link>
        </div>
        <button
          type="button"
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "block h-px w-5 bg-paper transition-transform",
              open && "translate-y-[6px] rotate-45"
            )}
          />
          <span className={cn("block h-px w-5 bg-paper", open && "opacity-0")} />
          <span
            className={cn(
              "block h-px w-5 bg-paper transition-transform",
              open && "-translate-y-[6px] -rotate-45"
            )}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-void lg:hidden">
          <nav className="shell flex flex-col py-6" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-4 font-display text-3xl"
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="py-4 tabular text-paper-dim">
              {site.phone}
            </a>
            <Link href="/lectura" className="btn btn-primary mt-2 self-start">
              Pedir lectura
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
