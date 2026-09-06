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
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

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
          ? "border-b border-line bg-cal/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="shell flex h-[4.35rem] items-center justify-between">
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
                  "font-mono text-[0.7rem] tracking-[0.18em] uppercase transition-colors",
                  active ? "text-cobre" : "text-ink/70 hover:text-ink"
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
            className="font-mono hidden text-[0.72rem] tracking-[0.06em] text-ink hover:text-cobre sm:inline"
          >
            {site.phone}
          </a>
          <Link
            href="/contacto"
            className="font-display hidden h-10 items-center bg-cobre px-5 text-[0.88rem] font-semibold text-cal transition-colors hover:bg-cobre-deep sm:inline-flex"
          >
            Encargar
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
        <div className="border-t border-line bg-cal lg:hidden">
          <nav className="shell flex flex-col gap-1 py-8" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display py-3 text-4xl font-semibold tracking-tight"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="font-display mt-4 inline-flex h-12 items-center justify-center bg-cobre text-cal"
            >
              Encargar un predio
            </Link>
            <a href={site.whatsapp} className="font-mono py-3 text-oxido">
              WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
