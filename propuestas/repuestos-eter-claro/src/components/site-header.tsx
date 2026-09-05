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
    const onScroll = () => setScrolled(window.scrollY > 10);
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
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-line bg-mist/88 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="shell flex h-[4.25rem] items-center justify-between lg:h-20">
        <Logo onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-ui text-[0.78rem] font-medium tracking-[0.18em] uppercase transition-colors",
                  active ? "text-ether-deep" : "text-ink/65 hover:text-ink"
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
            className="font-ui hidden text-[0.78rem] font-medium tracking-wide text-ink hover:text-ether-deep sm:inline"
          >
            {site.phone}
          </a>
          <Link
            href="/consulta"
            className="font-ui hidden h-10 items-center bg-ether-deep px-5 text-[0.78rem] font-medium tracking-[0.12em] text-mist uppercase transition-colors hover:bg-ink sm:inline-flex"
          >
            Consultar
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={cn(
                "block h-px w-5 bg-ink transition-transform duration-300",
                open && "translate-y-[6px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-ink transition-opacity duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-ink transition-transform duration-300",
                open && "-translate-y-[6px] -rotate-45"
              )}
            />
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-line bg-mist lg:hidden"
      >
        <nav className="shell flex flex-col gap-1 py-6" aria-label="Móvil">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display py-3 text-3xl font-normal tracking-tight"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/consulta"
            className="font-display py-3 text-3xl font-normal tracking-tight text-ether-deep"
          >
            Consultar
          </Link>
          <a href={site.whatsapp} className="mt-4 text-[0.9rem] text-muted">
            WhatsApp · {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
