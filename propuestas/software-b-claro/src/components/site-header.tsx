"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { nav, sheets } from "@/lib/site";
import { cn } from "@/lib/utils";

function sheetOf(pathname: string) {
  if (sheets[pathname]) return sheets[pathname];
  const base = "/" + pathname.split("/").filter(Boolean)[0];
  return sheets[base] ?? "00";
}

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

  const sheet = sheetOf(pathname);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background,box-shadow] duration-400",
        scrolled || open
          ? "bg-nieve/88 shadow-[0_1px_0_0_var(--line)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-foam"
      >
        Saltar al contenido
      </a>
      <div className="sheet flex h-[var(--header)] items-center justify-between">
        <Link href="/" aria-label="Meridiano, inicio" className="relative z-50">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-display text-[0.95rem] tracking-[-0.02em] transition-colors",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                <span className="mr-2 font-mono text-[0.62rem] tracking-[0.14em] text-norte">
                  {item.sheet}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <p className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-muted">
            Lám {sheet}
          </p>
          <Link href="/contacto" className="btn btn-ink h-10 px-4 text-[0.84rem]">
            Levantamiento
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
        className="fixed inset-0 z-40 bg-nieve md:hidden"
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-1" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="display text-[3.4rem]"
              >
                <span className="mr-3 font-mono text-sm tracking-[0.14em] text-norte">
                  {item.sheet}
                </span>
                {item.label}
              </Link>
            ))}
            <Link href="/contacto" className="display text-[3.4rem] text-norte">
              Conversar
            </Link>
          </nav>
          <p className="kicker">Providencia · luz norte</p>
        </div>
      </div>
    </header>
  );
}
