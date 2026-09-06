import { ImageResponse } from "next/og";

export const alt = "Sextante — Primero la mira.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#090a0c",
          color: "#e6dfd0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="42" height="42" viewBox="0 0 32 32">
            <path
              d="M6.2 24.8 A12.4 12.4 0 0 1 25.8 24.8"
              fill="none"
              stroke="#e6dfd0"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M16 8.2 L22.4 24.2"
              fill="none"
              stroke="#e6dfd0"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle cx="16" cy="8.2" r="1.4" fill="#e6dfd0" />
          </svg>
          <div style={{ fontSize: 36, letterSpacing: -1 }}>Sextante</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 84, letterSpacing: -3, lineHeight: 0.9 }}>
            Primero la mira.
          </div>
          <div style={{ fontSize: 28, color: "#8d8880" }}>
            Estudio de software · Valparaíso
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#b7ad98",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>33°02′S · 71°37′O</span>
          <span>Blanco 1199</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
