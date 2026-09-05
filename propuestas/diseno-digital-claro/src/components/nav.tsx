"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  if (openPath !== pathname) {
    setOpenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        "sticky top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-500",
        scrolled || open
          ? "bg-paper/80 shadow-[0_1px_0_0_var(--line)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-foam"
      >
        Saltar al contenido
      </a>
      <div className="wrap flex h-[4.25rem] items-center justify-between md:h-[4.75rem]">
        <Link href="/" aria-label="Nítida, inicio" className="relative z-50">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[0.92rem] tracking-[-0.01em] transition-colors",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contacto"
            className="inline-flex h-10 items-center rounded-full bg-ink px-4 text-[0.82rem] tracking-[0.04em] text-foam transition-colors hover:bg-norte"
          >
            Conversar
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menú</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={cn(
                "block h-px w-full bg-ink transition-transform duration-300",
                open && "translate-y-[4px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-full bg-ink transition-transform duration-300",
                open && "-translate-y-[4px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="fixed inset-0 z-40 bg-paper md:hidden"
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-1" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-5xl tracking-[-0.03em] text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="font-display text-5xl tracking-[-0.03em] text-norte"
            >
              Conversar
            </Link>
          </nav>
          <p className="eyebrow">Ñuñoa · Avenida Italia</p>
        </div>
      </div>
    </header>
  );
}
