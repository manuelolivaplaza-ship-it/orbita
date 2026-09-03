"use client";

import { useState } from "react";
import Link from "next/link";
import { site, triage } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Triage() {
  const [id, setId] = useState<string | null>(null);
  const selected = triage.find((t) => t.id === id);

  return (
    <div>
      <div className="grid gap-2">
        {triage.map((item) => {
          const active = item.id === id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setId(item.id)}
              className={cn(
                "border px-4 py-3.5 text-left text-[0.95rem] leading-snug transition-colors",
                active
                  ? "border-lantern bg-surface text-paper"
                  : "border-line bg-transparent text-paper-dim hover:border-lantern/50 hover:text-paper"
              )}
              aria-pressed={active}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {selected ? (
        <div
          className="mt-6 border border-lantern/35 bg-surface p-6"
          role="status"
        >
          <p className="kicker">
            {selected.level === "ahora" ? "Ven ahora" : "Pide hora"}
          </p>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-paper">
            {selected.detail}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {selected.level === "ahora" ? (
              <>
                <a href={site.phoneHref} className="btn btn-primary">
                  Llamar a la guardia
                </a>
                <a href={site.whatsappUrgencia} className="btn btn-ghost">
                  WhatsApp
                </a>
              </>
            ) : (
              <>
                <Link href="/hora" className="btn btn-primary">
                  Pedir hora
                </Link>
                <a href={site.whatsapp} className="btn btn-ghost">
                  WhatsApp
                </a>
              </>
            )}
          </div>
        </div>
      ) : (
        <p className="mt-5 text-sm text-muted">
          Elige lo que más se parece. Si no calza, llama: el triaje de verdad se
          hace por teléfono.
        </p>
      )}
    </div>
  );
}
