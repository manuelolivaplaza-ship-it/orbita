"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "border-b border-line bg-paper/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:h-20 lg:px-12 xl:px-16">
          <Link
            href="/"
            onClick={closeMenu}
            className="font-display text-[1.65rem] leading-none tracking-[0.32em] text-ink"
            aria-label="ALBA, inicio"
          >
            ALBA
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[12px] tracking-[0.16em] uppercase transition-colors duration-300",
                    active
                      ? "text-ink"
                      : "text-muted-foreground hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contacto"
              className="hidden border border-ink bg-ink px-5 py-2.5 text-[11px] tracking-[0.22em] text-paper uppercase transition-colors duration-300 hover:border-bronze hover:bg-bronze sm:inline-flex"
            >
              Consulta
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">Menú</span>
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    "absolute left-0 block h-px w-full bg-ink transition-all duration-300",
                    open ? "top-1.5 rotate-45" : "top-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1.5 block h-px w-full bg-ink transition-opacity duration-300",
                    open ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 block h-px w-full bg-ink transition-all duration-300",
                    open ? "top-1.5 -rotate-45" : "top-3"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-paper lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav
              className="flex h-full flex-col justify-between px-6 pb-10 pt-28"
              aria-label="Móvil"
            >
              <ul className="space-y-1">
                {[...nav, { href: "/contacto", label: "Consulta" }].map(
                  (item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.04 * index,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="font-display block py-2 text-4xl tracking-tight text-ink"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  )
                )}
              </ul>
              <p className="text-sm text-muted-foreground">
                {site.address.line}
                <br />
                {site.address.city}
              </p>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
