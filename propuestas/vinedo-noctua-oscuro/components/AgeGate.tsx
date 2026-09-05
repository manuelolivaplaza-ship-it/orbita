"use client";

import { useEffect, useState } from "react";
import { OwlMark } from "@/components/OwlMark";
import { Starfield } from "@/components/Starfield";

const KEY = "noctua-mayor";

export function AgeGate() {
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [bye, setBye] = useState(false);

  useEffect(() => {
    setAllowed(localStorage.getItem(KEY) === "si");
  }, []);

  useEffect(() => {
    if (allowed !== true) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [allowed]);

  if (allowed === true) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink">
      <Starfield />
      <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center px-8 text-center">
        <OwlMark className="h-16 w-12 text-brass" />
        <p className="mt-8 font-mono text-[10px] uppercase tracking-kicker text-mist">
          Valle del Elqui · Chile
        </p>
        <h1 className="mt-4 font-display text-5xl font-light tracking-[0.28em] sm:text-6xl">
          NOCTUA
        </h1>
        {bye ? (
          <p className="mt-10 font-display text-2xl italic text-parchment">
            El valle se queda en silencio.
          </p>
        ) : allowed === false ? (
          <>
            <p className="mt-10 max-w-sm font-display text-xl italic leading-snug text-parchment sm:text-2xl">
              Para entrar, confirma que eres mayor de 18 años.
            </p>
            <div className="mt-12 flex items-center gap-8">
              <button
                className="btn"
                onClick={() => {
                  localStorage.setItem(KEY, "si");
                  setAllowed(true);
                }}
              >
                Entrar
              </button>
              <button className="btn-ghost" onClick={() => setBye(true)}>
                Salir
              </button>
            </div>
            <p className="mt-16 font-mono text-[10px] uppercase tracking-kicker text-mist">
              El exceso de alcohol es perjudicial para la salud
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
