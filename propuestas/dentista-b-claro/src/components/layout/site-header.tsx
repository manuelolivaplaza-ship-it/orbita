"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-[1180px] items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[0.82rem] tracking-[0.04em] text-muted-foreground transition-colors hover:text-foreground",
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "text-foreground"
                  : ""
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-[0.82rem] text-foreground"
          >
            <Phone className="size-3.5 text-sage" />
            {site.phone}
          </a>
          <Button
            asChild
            className="h-10 rounded-full px-5 text-[0.82rem] tracking-wide"
          >
            <Link href="/cita">Reservar visita</Link>
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[88vw] max-w-sm bg-background px-2"
          >
            <SheetHeader>
              <SheetTitle className="sr-only">Menú</SheetTitle>
              <Logo />
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pt-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-2 py-3 font-display text-2xl text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="rounded-xl px-2 py-3 font-display text-2xl text-foreground"
              >
                Contacto
              </Link>
            </nav>
            <div className="mt-auto flex flex-col gap-3 p-4">
              <Button asChild className="h-12 rounded-full">
                <Link href="/cita">Reservar primera visita</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full">
                <a href={site.phoneHref}>Llamar {site.phone}</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
