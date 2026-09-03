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
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed top-8 right-0 left-0 z-40 transition-all duration-500",
        overHero
          ? "bg-transparent"
          : "border-b border-border/70 bg-background/82 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-[1180px] items-center justify-between gap-4 px-5 sm:px-8">
        <Logo onDark={overHero} />
        <nav className="hidden items-center gap-6 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[0.78rem] tracking-[0.04em] transition-colors",
                overHero
                  ? "text-primary-foreground/75 hover:text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? overHero
                    ? "text-primary-foreground"
                    : "text-foreground"
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
            className={cn(
              "inline-flex items-center gap-2 text-[0.82rem]",
              overHero ? "text-primary-foreground" : "text-foreground"
            )}
          >
            <Phone className="size-3.5 text-moss" />
            {site.phone}
          </a>
          <Button
            asChild
            className={cn(
              "h-10 rounded-full px-5 text-[0.82rem]",
              overHero &&
                "border-primary-foreground/25 bg-primary-foreground text-deep hover:bg-primary-foreground/90"
            )}
          >
            <Link href="/primera-hora">Agendar hora</Link>
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "xl:hidden",
                overHero &&
                  "text-primary-foreground hover:bg-primary-foreground/10"
              )}
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
              <p className="sr-only">Navegación de Estuario</p>
              <Logo />
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pt-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="rounded-xl px-2 py-3 font-display text-3xl text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={close}
                className="rounded-xl px-2 py-3 font-display text-3xl text-foreground"
              >
                Contacto
              </Link>
            </nav>
            <div className="mt-auto flex flex-col gap-3 p-4">
              <Button asChild className="h-12 rounded-full">
                <Link href="/primera-hora" onClick={close}>
                  Agendar hora
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full">
                <a href={site.phoneHref}>Urgencias {site.phone}</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
