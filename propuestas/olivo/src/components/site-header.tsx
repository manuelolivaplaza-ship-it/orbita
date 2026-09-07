"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const overlayRoutes = new Set(["/", "/vender", "/nosotros"]);

export function SiteHeader() {
  const pathname = usePathname();
  const overlay = overlayRoutes.has(pathname);
  const lastY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const inverted = overlay && !scrolled;

  useEffect(() => {
    lastY.current = window.scrollY;
    setScrolled(window.scrollY > 16);

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      if (menuOpen || y < 72) {
        setHidden(false);
      } else {
        setHidden(y > lastY.current);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen, pathname]);

  useEffect(() => {
    setHidden(false);
    setScrolled(window.scrollY > 16);
    lastY.current = window.scrollY;
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out",
          hidden && !menuOpen && "-translate-y-full",
          inverted
            ? "border-b border-transparent bg-transparent"
            : "border-b border-border/70 bg-background/90 shadow-sm backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 md:px-8">
          <Logo inverted={inverted} />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm tracking-wide transition-colors",
                    inverted
                      ? active
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                      : active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              asChild
              variant="ghost"
              className={cn("h-10", inverted && "text-white hover:bg-white/10 hover:text-white")}
            >
              <a
                href={waLink("Hola Olivo, quiero hablar con un corredor.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
            <Button asChild className="h-10 px-4">
              <Link href="/vender">Tasar mi casa</Link>
            </Button>
          </div>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "lg:hidden",
                  inverted &&
                    "border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white",
                )}
                aria-label="Abrir menú"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader>
                <SheetTitle className="sr-only">Menú</SheetTitle>
                <Logo />
              </SheetHeader>
              <nav className="mt-8 grid gap-1 px-4" aria-label="Móvil">
                {nav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-xl px-3 py-3 font-heading text-2xl hover:bg-accent"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-8 grid gap-2 px-4">
                <SheetClose asChild>
                  <Button asChild className="h-12">
                    <Link href="/vender">Tasar mi casa</Link>
                  </Button>
                </SheetClose>
                <Button asChild variant="outline" className="h-12">
                  <a href={site.phoneHref}>{site.phoneDisplay}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      {overlay ? null : <div aria-hidden className="h-[72px]" />}
    </>
  );
}
