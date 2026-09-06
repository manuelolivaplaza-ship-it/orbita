"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-line bg-luz/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between">
        <Logo onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-[0.72rem] tracking-[0.16em] uppercase transition-colors",
                  active ? "text-sol" : "text-ink/70 hover:text-ink"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="font-mono hidden text-[0.72rem] tracking-[0.08em] text-ink hover:text-sol sm:inline"
          >
            {site.phone}
          </a>
          <Link
            href="/visita"
            className="font-display hidden h-10 items-center bg-sol px-5 text-[0.88rem] font-semibold text-luz transition-colors hover:bg-sol-deep sm:inline-flex"
          >
            Agendar visita
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={cn(
                "block h-[1.5px] w-5 bg-ink transition-transform duration-300",
                open && "translate-y-[6.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] w-5 bg-ink transition-opacity duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] w-5 bg-ink transition-transform duration-300",
                open && "-translate-y-[6.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-luz lg:hidden">
          <nav className="shell flex flex-col gap-1 py-8" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display py-3 text-4xl font-medium tracking-tight"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/vender"
              onClick={() => setOpen(false)}
              className="font-display py-3 text-4xl font-medium tracking-tight"
            >
              Vender
            </Link>
            <Link
              href="/visita"
              onClick={() => setOpen(false)}
              className="btn btn-sol mt-4 h-12 w-full"
            >
              Agendar visita
            </Link>
            <a href={site.whatsapp} className="font-mono py-3 text-norte">
              WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
