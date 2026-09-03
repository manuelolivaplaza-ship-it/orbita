"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-200",
        scrolled
          ? "border-b border-line bg-background/92 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-[1180px] items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[0.78rem] tracking-[0.08em] text-muted-foreground transition-colors duration-160 hover:text-foreground",
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "text-foreground"
                  : ""
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className="text-[0.82rem] tabular text-foreground transition-colors hover:text-champagne"
          >
            {site.phone}
          </a>
          <Button
            asChild
            className="h-10 rounded-none px-5 text-[0.72rem] tracking-[0.16em] uppercase"
          >
            <Link href="/agenda">Agendar evaluación</Link>
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-none lg:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(100%,22rem)] rounded-none border-line bg-background p-0 shadow-none"
          >
            <SheetHeader className="border-b border-line px-6 py-5">
              <SheetTitle className="font-display text-left text-lg tracking-[0.18em]">
                OBSIDIANA
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col px-6 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 text-sm tracking-[0.06em]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/agenda"
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-sm"
              >
                Agendar evaluación
              </Link>
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="py-4 text-sm"
              >
                Contacto
              </Link>
            </nav>
            <a
              href={site.phoneHref}
              className="mx-6 mt-4 block font-display text-xl tabular"
            >
              {site.phone}
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
