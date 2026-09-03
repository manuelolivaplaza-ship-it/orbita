"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Logo } from "@/components/logo";
import { HoursLive } from "@/components/hours-live";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { clinic, nav } from "@/lib/clinic";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-2 text-[0.78rem] sm:px-8">
          <p className="tracking-wide">
            Urgencias 24 h
            <span className="hidden sm:inline"> · llame antes de salir</span>
          </p>
          <a
            href={`tel:${clinic.phoneTel}`}
            className="shrink-0 font-medium underline-offset-4 hover:underline"
          >
            {clinic.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="border-b border-border/80 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[0.9rem] transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <HoursLive compact className="hidden xl:flex" />
            <Button
              asChild
              className="hidden h-10 rounded-full px-5 sm:inline-flex"
            >
              <Link href="/turnos">Pedir turno</Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="h-10 shrink-0 rounded-full px-3 lg:hidden"
                  aria-label="Abrir menú"
                >
                  <Menu />
                  <span className="text-sm">Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background w-80">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menú</SheetTitle>
                  <Logo compact />
                </SheetHeader>
                <nav className="flex flex-col gap-1 px-4" aria-label="Móvil">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-3 text-lg text-foreground hover:bg-secondary"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/turnos"
                    onClick={() => setOpen(false)}
                    className="mt-2 rounded-xl bg-primary px-3 py-3 text-center text-lg text-primary-foreground"
                  >
                    Pedir turno
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
