"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 text-ink transition-colors duration-500",
        solid && "nav-paper border-b border-line/80",
      )}
    >
      <div className="mx-auto flex h-[4.4rem] max-w-[1480px] items-center justify-between px-5 md:px-10 lg:px-16">
        <Logo compact={open} />

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
                  "trace font-mono text-[0.64rem] uppercase tracking-[0.24em]",
                  active ? "opacity-100" : "opacity-65 hover:opacity-100",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={site.phoneHref}
            className="hidden font-mono text-[0.62rem] tracking-[0.12em] text-ink-soft xl:inline"
          >
            {site.phone}
          </a>
          <Link href="/cotizar" className="btn btn-ink hidden px-5 py-2 text-[0.6rem] sm:inline-flex">
            Cotizar
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Cerrar" : "Menú"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={cn("block h-px bg-current transition", open && "translate-y-[5px] rotate-45")} />
              <span className={cn("block h-px bg-current transition", open && "opacity-0")} />
              <span className={cn("block h-px bg-current transition", open && "-translate-y-[7px] -rotate-45")} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-movil"
          className="border-t border-line bg-paper px-5 py-8 lg:hidden"
        >
          <nav className="grid gap-5" aria-label="Móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-3xl font-light"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/cotizar" className="font-display text-3xl font-light">
              Cotizar
            </Link>
            <a href={site.phoneHref} className="mt-4 font-mono text-sm tracking-wide text-ink-soft">
              {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
