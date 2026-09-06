"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { nav, studio } from "@/lib/studio";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > last && y > 80 && !open);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,height] duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          open
            ? "bg-void text-paper"
            : transparent
              ? "bg-transparent text-paper"
              : "bg-void/92 text-paper backdrop-blur-md"
        }`}
      >
        <div
          className={`shell flex items-center justify-between transition-[height] duration-300 ${
            scrolled && !open ? "h-14" : "h-[4.5rem]"
          }`}
        >
          <Link
            href="/"
            aria-label="UMBRAL, inicio"
            className="relative z-10"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[11px] uppercase tracking-[0.22em] transition-opacity ${
                    active ? "opacity-100" : "opacity-55 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href={studio.phoneHref}
              className="link-line hidden text-[11px] uppercase tracking-[0.18em] text-paper-dim lg:inline"
            >
              {studio.phone}
            </a>
            <Link href="/encargo" className="btn hidden sm:inline-flex">
              Cotizar
            </Link>
            <button
              type="button"
              className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menú</span>
              <span className="flex w-5 flex-col gap-1.5">
                <span
                  className={`block h-px bg-paper transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
                />
                <span
                  className={`block h-px bg-paper transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-void px-5 pt-28 md:hidden">
          <nav className="grid gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-4xl tracking-tight"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12 flex flex-col gap-4">
            <Link href="/encargo" className="btn w-fit">
              Conversar sobre tu proyecto
            </Link>
            <a href={studio.phoneHref} className="text-paper-dim">
              {studio.phone}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
