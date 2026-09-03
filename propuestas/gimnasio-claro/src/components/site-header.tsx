"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/button";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 12,
    () => false,
  );

  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-paper/90 backdrop-blur-md"
          : "border-transparent bg-paper/40 backdrop-blur-[2px]",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1500px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <Logo compact />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors",
                  active ? "text-copper" : "text-ink-soft hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="/visita" className="hidden sm:inline-flex">
            Reservar visita
          </ButtonLink>
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={cn(
                "h-px w-6 bg-ink transition-transform duration-300",
                open && "translate-y-[4px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-ink transition-opacity duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-ink transition-transform duration-300",
                open && "-translate-y-[4px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "fixed inset-x-0 top-[4.5rem] bottom-0 bg-paper px-5 pt-8 sm:top-20 sm:px-8",
            "transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        >
          <nav aria-label="Móvil" className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-5 font-display text-4xl tracking-tight"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/visita"
              className="border-b border-line py-5 font-display text-4xl tracking-tight text-copper"
            >
              Visita
            </Link>
          </nav>
          <p className="mt-10 text-sm text-ink-soft">{site.address.full}</p>
          <p className="mt-2 text-sm text-ink-soft">{site.hoursShort}</p>
        </div>
      </div>
    </header>
  );
}
