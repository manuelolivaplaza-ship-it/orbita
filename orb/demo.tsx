"use client";

import { useState } from "react";
import { Orb } from "./Orb";
import type { OrbState } from "./orb-logic";

/**
 * Demo del Orb portable.
 * Muestra la animación de aparición (burbuja + mareo) y los estados.
 *
 * Uso: importa este componente en cualquier página para probar,
 * o copia el patrón del botón "Aparecer" en tu proyecto.
 */
const STATES: OrbState[] = ["idle", "thinking", "happy", "working", "success", "error"];

export function OrbDemo() {
  const [state, setState] = useState<OrbState>("idle");
  const [appearKey, setAppearKey] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        padding: 32,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <Orb
        size={140}
        state={state}
        tone="ink"
        playful
        hop
        shadow
        appear
        appearKey={appearKey}
        onAppearDone={() => console.log("Orb apareció")}
      />

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
        {STATES.map((s) => (
          <button
            key={s}
            onClick={() => setState(s)}
            style={{
              padding: "6px 12px",
              borderRadius: 999,
              border: "1px solid #ccc",
              background: s === state ? "#111" : "#fff",
              color: s === state ? "#fff" : "#111",
              cursor: "pointer",
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <button
        onClick={() => setAppearKey((k) => k + 1)}
        style={{
          padding: "10px 22px",
          borderRadius: 999,
          border: "none",
          background: "#111",
          color: "#fff",
          fontSize: 15,
          cursor: "pointer",
        }}
      >
        Aparecer de nuevo 🫧
      </button>
    </div>
  );
}
