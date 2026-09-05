"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mark } from "@/components/mark";
import { nav, site } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const start = window.setTimeout(onScroll, 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(start);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-40 transition-colors duration-500",
          scrolled || open ? "bg-void/80 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "gold-rule origin-left transition-opacity duration-700",
            scrolled ? "opacity-100" : "opacity-0",
          )}
        />
        <div className="mx-auto flex h-[4.25rem] max-w-[1600px] items-center justify-between px-5 md:px-10">
          <Link
            href="/"
            className="group flex items-center gap-3 text-ivory"
            aria-label={`${site.name}, inicio`}
            onClick={() => setOpen(false)}
          >
            <Mark className="h-7 w-6 text-gold transition-transform duration-500 group-hover:rotate-6" />
            <span className="font-display text-[13px] font-semibold tracking-[0.28em]">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-mono text-[11px] tracking-[0.22em] uppercase transition-colors duration-300",
                    active ? "text-gold" : "text-stone hover:text-ivory",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menú</span>
            <span className="flex flex-col gap-[6px]">
              <span
                className={cn(
                  "block h-px w-6 origin-center bg-ivory transition-transform duration-500",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-6 origin-center bg-ivory transition-transform duration-500",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col justify-between bg-void px-6 pt-28 pb-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col gap-2">
              {[{ href: "/", label: "Inicio" }, ...nav].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    className="font-display text-5xl font-semibold tracking-tight text-ivory"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <p className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase">
              {site.coords} · {site.comuna}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
