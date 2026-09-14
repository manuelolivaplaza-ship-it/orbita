"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarClock,
  Columns3,
  LayoutDashboard,
  LogOut,
  Settings,
  Table2,
} from "lucide-react";
import { logoutAction } from "@/app/actions/auth";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/hoy", label: "Hoy", icon: CalendarClock },
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/pipeline", label: "Pipeline", icon: Columns3 },
  { href: "/leads", label: "Leads", icon: Table2 },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function AppShell({
  children,
  overdue,
  inbound,
}: {
  children: React.ReactNode;
  overdue?: number;
  inbound?: number;
}) {
  const path = usePathname();
  return (
    <div className="flex min-h-full">
      <aside className="sticky top-0 flex h-screen w-[220px] shrink-0 flex-col border-r border-border/80 bg-sidebar">
        <div className="flex h-14 items-center gap-2 px-4">
          <span className="font-heading text-[15px] font-semibold tracking-tight">
            Reclu
          </span>
          <span className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            CRM
          </span>
        </div>
        <nav className="flex flex-1 flex-col gap-0.5 px-2">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? path === "/"
                : path === item.href || path.startsWith(`${item.href}/`);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-8 items-center gap-2 rounded-md px-2 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                  active && "bg-muted text-foreground",
                )}
              >
                <Icon className="size-3.5" />
                <span className="flex-1">{item.label}</span>
                {item.href === "/hoy" && (inbound || overdue) ? (
                  <span
                    className={
                      inbound
                        ? "rounded-full bg-emerald-500/20 px-1.5 font-mono text-[10px] text-emerald-300"
                        : "rounded-full bg-rose-500/20 px-1.5 font-mono text-[10px] text-rose-300"
                    }
                  >
                    {inbound || overdue}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>
        <form action={logoutAction} className="border-t border-border/80 p-2">
          <button
            type="submit"
            className="flex h-8 w-full items-center gap-2 rounded-md px-2 text-[13px] text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <LogOut className="size-3.5" />
            Salir
          </button>
        </form>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <main className="mx-auto w-full max-w-[1400px] flex-1 px-6 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
