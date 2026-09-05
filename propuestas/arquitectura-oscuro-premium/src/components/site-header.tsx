"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/logo";
import { nav, studio } from "@/lib/studio";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          open
            ? "bg-void text-paper"
            : transparent
              ? "bg-transparent text-paper"
              : "bg-void/92 text-paper backdrop-blur-md"
        }`}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between">
          <Link
            href="/"
            aria-label="ORILLA, inicio"
            className="relative z-10"
            onClick={() => setOpen(false)}
          >
            <Wordmark />
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
                    active ? "opacity-100" : "opacity-60 hover:opacity-100"
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
              className="hidden text-[11px] uppercase tracking-[0.18em] text-paper-dim link-line lg:inline"
            >
              {studio.phone}
            </a>
            <Link
              href="/contacto"
              className="hidden text-[11px] uppercase tracking-[0.22em] text-copper link-line md:inline"
            >
              Empezar un proyecto
            </Link>
            <button
              type="button"
              className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="flex w-6 flex-col gap-1.5">
                <span
                  className={`h-px w-full origin-center bg-paper transition ${
                    open ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full origin-center bg-paper transition ${
                    open ? "-translate-y-[3.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
        <span
          className={`block h-px origin-left bg-copper/40 transition-transform duration-500 ${
            transparent ? "scale-x-0" : "scale-x-100"
          }`}
        />
      </header>

      {open ? (
        <div className="nav-overlay fixed inset-0 z-40 bg-void text-paper md:hidden">
          <nav className="flex h-full flex-col justify-between px-5 pb-10 pt-28">
            <ul className="space-y-2">
              {nav.map((item, index) => (
                <li
                  key={item.href}
                  className="nav-item"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl italic leading-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {studio.coords}
            </p>
          </nav>
        </div>
      ) : null}
    </>
  );
}
