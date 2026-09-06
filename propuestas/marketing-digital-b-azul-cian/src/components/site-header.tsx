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
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200",
        scrolled || open
          ? "border-b border-line bg-foam"
          : "border-b border-transparent bg-foam"
      )}
    >
      <div className="shell flex h-[4.35rem] items-center justify-between lg:h-[4.75rem]">
        <Logo onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[0.84rem] font-medium transition-colors duration-200",
                  active ? "text-cyan-deep" : "text-ink/70 hover:text-ink"
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
            className="hidden text-[0.84rem] font-medium text-ink hover:text-cyan-deep sm:inline"
          >
            {site.phone}
          </a>
          <Link
            href="/lectura"
            className="hidden h-10 items-center bg-navy px-5 text-[0.82rem] font-semibold text-foam transition-colors duration-200 hover:bg-ink sm:inline-flex"
          >
            Pedir lectura
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={cn(
                "block h-[1.5px] w-5 bg-ink transition-transform duration-200",
                open && "translate-y-[6.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] w-5 bg-ink transition-opacity duration-200",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] w-5 bg-ink transition-transform duration-200",
                open && "-translate-y-[6.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        className={cn(
          "border-t border-line bg-foam lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="shell flex flex-col gap-1 py-5" aria-label="Móvil">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-[1.15rem] font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/mesa" className="py-2 text-[1.15rem] font-medium">
            Mesa
          </Link>
          <Link
            href="/lectura"
            className="mt-3 inline-flex h-12 items-center justify-center bg-navy text-[0.92rem] font-semibold text-foam"
          >
            Pedir lectura
          </Link>
          <a
            href={site.whatsapp}
            className="mt-2 inline-flex h-12 items-center justify-center border border-ink text-[0.92rem] font-semibold"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
