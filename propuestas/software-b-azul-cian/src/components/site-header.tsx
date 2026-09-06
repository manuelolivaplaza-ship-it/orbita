"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";
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
        "sticky top-0 z-50 transition-[background-color] duration-200",
        scrolled || open ? "bg-papel" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "shell flex h-[var(--header)] items-center justify-between",
          (scrolled || open) && "border-b border-line",
        )}
      >
        <Link href="/" aria-label="Traza, inicio" className="relative z-50">
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
                  "text-[0.92rem] tracking-[-0.01em] transition-colors duration-200",
                  active ? "text-tinta" : "text-muted hover:text-tinta",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={site.phoneHref}
            className="text-[0.82rem] font-medium text-muted hover:text-tinta"
          >
            {site.phone}
          </a>
          <Link href="/contacto" className="btn btn-navy h-10 px-4 text-[0.84rem]">
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
                "block h-px w-full bg-tinta transition-transform duration-200",
                open && "translate-y-[5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-full bg-tinta transition-transform duration-200",
                open && "-translate-y-[5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="fixed inset-0 z-40 bg-papel md:hidden"
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-24">
          <nav className="flex flex-col gap-1" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="display py-1 text-[3.2rem]"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contacto" className="display py-1 text-[3.2rem] text-cian-deep">
              Conversar
            </Link>
          </nav>
          <p className="caption">Ñuñoa · {site.phone}</p>
        </div>
      </div>
    </header>
  );
}
