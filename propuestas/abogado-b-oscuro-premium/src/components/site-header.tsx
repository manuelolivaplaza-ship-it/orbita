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
                  "text-[0.78rem] tracking-[0.06em] text-muted transition-colors duration-200 hover:text-paper",
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
            className="tabular text-[0.86rem] text-paper transition-colors hover:text-copper"
          >
            {site.phone}
          </a>
          <Link href="/primera-hora" className="btn btn-primary !min-h-10 !px-5">
            Primera hora
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
              "block h-[1.5px] w-5 bg-paper transition-transform duration-200",
              open && "translate-y-[6.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-[1.5px] w-5 bg-paper transition-opacity duration-200",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-[1.5px] w-5 bg-paper transition-transform duration-200",
              open && "-translate-y-[6.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-[4.5rem] z-40 bg-void lg:hidden">
          <nav className="shell flex flex-col pt-8" aria-label="Móvil">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-baseline justify-between border-b border-line py-5"
              >
                <span className="font-display text-3xl tracking-tight">
                  {item.label}
                </span>
                <span className="kicker tabular text-muted">0{i + 1}</span>
              </Link>
            ))}
            <Link
              href="/primera-hora"
              className="btn btn-primary mt-8 w-full"
            >
              Pedir la primera hora
            </Link>
            <a href={site.phoneHref} className="mt-4 text-center text-paper-dim">
              {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
