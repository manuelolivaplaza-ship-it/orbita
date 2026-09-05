"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { OwlMark } from "@/components/OwlMark";
import { useCart } from "@/components/CartProvider";
import { nav } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const home = pathname === "/";
  const solid = scrolled || !home || menu;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          solid ? "bg-ink/85 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="flex items-center justify-between px-6 py-4 md:px-10 lg:px-14">
          <Link href="/" className="flex items-center gap-3 text-bone">
            <OwlMark className="h-8 w-6 text-brass" />
            <span className="font-display text-lg tracking-[0.32em]">
              NOCTUA
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-sans text-[11px] uppercase tracking-[0.22em] transition-colors",
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "text-brass"
                    : "text-parchment/80 hover:text-bone",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <button
              className="font-sans text-[11px] uppercase tracking-[0.22em] text-parchment/80 transition-colors hover:text-bone"
              onClick={() => setOpen(true)}
              aria-label="Abrir carrito"
            >
              Carrito
              <span className="ml-2 tabular-nums text-brass">
                {String(count).padStart(2, "0")}
              </span>
            </button>
            <button
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              onClick={() => setMenu((v) => !v)}
              aria-label={menu ? "Cerrar menú" : "Abrir menú"}
            >
              <span
                className={cn(
                  "h-px w-5 bg-bone transition",
                  menu && "translate-y-[4px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-5 bg-bone transition",
                  menu && "-translate-y-[4px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {menu && (
        <div className="fixed inset-0 z-40 bg-ink pt-24 lg:hidden">
          <nav className="flex flex-col gap-2 px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-5xl font-light tracking-wide text-bone"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/carrito"
              className="mt-8 font-display text-3xl italic text-brass"
            >
              Carrito
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
