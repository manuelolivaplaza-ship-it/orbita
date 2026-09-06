"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  if (openPath !== pathname) {
    setOpenPath(pathname);
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
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-lacca" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "frame flex h-[var(--header)] items-center justify-between",
          scrolled && "shadow-[0_1px_0_0_var(--linea)]",
        )}
      >
        <Link href="/" aria-label="Sextante, inicio" className="relative z-50">
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
                  "font-display text-[1.15rem] tracking-[-0.03em] transition-colors",
                  active ? "text-marfil" : "text-niebla hover:text-marfil",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/contacto" className="btn btn-primary h-11 px-5 text-[1rem]">
            Pedir una mira
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
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={cn(
                "block h-px w-full bg-marfil transition-transform duration-300",
                open && "translate-y-[4px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-full bg-marfil transition-transform duration-300",
                open && "-translate-y-[4px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="fixed inset-0 z-40 bg-lacca md:hidden"
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-1" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="display text-[3.2rem]"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contacto" className="display text-[3.2rem] text-faro">
              Pedir una mira
            </Link>
          </nav>
          <p className="kicker">Valparaíso · Blanco 1199</p>
        </div>
      </div>
    </header>
  );
}
