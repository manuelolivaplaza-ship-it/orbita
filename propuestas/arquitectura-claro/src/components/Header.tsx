"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/Logo";
import { nav } from "@/lib/studio";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const inverted = isHome && !scrolled && !open;

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

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          open
            ? "bg-ink text-paper"
            : inverted
              ? "bg-transparent text-paper"
              : "bg-paper/90 text-ink backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-[1600px] items-center justify-between px-5 md:px-8 lg:px-10">
          <Link
            href="/"
            aria-label="VETA, inicio"
            className="relative z-10"
            onClick={() => setOpen(false)}
          >
            <Wordmark inverted={inverted || open} />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[11px] uppercase tracking-[0.22em] transition-opacity ${
                    active ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <Link
              href="/contacto"
              className={`hidden text-[11px] uppercase tracking-[0.22em] md:inline link-line ${
                inverted || open ? "text-paper" : "text-ink"
              }`}
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
              <span className="sr-only">Menú</span>
              <span className="flex w-6 flex-col gap-1.5">
                <span
                  className={`h-px w-full origin-center transition ${
                    inverted || open ? "bg-paper" : "bg-ink"
                  } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
                />
                <span
                  className={`h-px w-full origin-center transition ${
                    inverted || open ? "bg-paper" : "bg-ink"
                  } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="nav-overlay fixed inset-0 z-40 bg-[#161412] text-[#ede8df] md:hidden">
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
            <p className="text-xs uppercase tracking-[0.22em] text-paper/60">
              Buenos Aires
            </p>
          </nav>
        </div>
      ) : null}
    </>
  );
}
