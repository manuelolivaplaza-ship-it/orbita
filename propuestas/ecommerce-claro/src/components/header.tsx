"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Logo } from "@/components/logo";
import { IconBag, IconClose, IconSearch } from "@/components/icons";
import { SearchPanel, useSearch } from "@/components/search";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/cn";
import { pad } from "@/lib/format";
import { nav } from "@/lib/site";

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

export function Header() {
  const pathname = usePathname();
  const { count, setOpen } = useCart();
  const { setOpen: setSearch } = useSearch();
  const [menu, setMenu] = useState(false);
  const [prev, setPrev] = useState(pathname);
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 16,
    () => false,
  );

  if (pathname !== prev) {
    setPrev(pathname);
    setMenu(false);
  }

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 text-tinta transition-colors duration-500",
          scrolled || menu
            ? "border-b border-linea/80 bg-papel/90 backdrop-blur-md"
            : "border-b border-transparent bg-papel/55 backdrop-blur-[2px]",
        )}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "link-line font-mono text-[0.64rem] uppercase tracking-[0.28em]",
                    active ? "opacity-100" : "opacity-70 hover:opacity-100",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center"
              aria-label="Buscar"
              onClick={() => setSearch(true)}
            >
              <IconSearch className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center"
              aria-label={`Carrito, ${count} ${count === 1 ? "pieza" : "piezas"}`}
              onClick={() => setOpen(true)}
            >
              <IconBag className="h-5 w-5" />
              <span className="font-mono nums absolute top-1.5 right-1 text-[0.58rem] tracking-wide">
                {pad(count)}
              </span>
            </button>
            <button
              type="button"
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-expanded={menu}
              aria-controls="menu-movil"
              aria-label={menu ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenu((v) => !v)}
            >
              {menu ? (
                <IconClose className="h-5 w-5" />
              ) : (
                <>
                  <span className="block h-px w-5 bg-current" />
                  <span className="block h-px w-5 bg-current" />
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu-movil"
        hidden={!menu}
        className="fixed inset-0 z-30 bg-papel pt-[4.5rem] text-tinta lg:hidden"
      >
        <nav className="shell flex flex-col gap-6 py-10" aria-label="Móvil">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-4xl tracking-tight"
              onClick={() => setMenu(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/carrito"
            className="font-display text-4xl tracking-tight"
            onClick={() => setMenu(false)}
          >
            Carrito
          </Link>
        </nav>
      </div>

      <SearchPanel />
    </>
  );
}
