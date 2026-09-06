import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Traza — Una traza para toda la operación.";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07192B",
          color: "#F2F7FA",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ width: 72, height: 10, background: "#12C4D4", borderRadius: 4 }} />
            <div style={{ width: 52, height: 10, background: "#1A5FD0", borderRadius: 4, marginLeft: 16 }} />
            <div style={{ width: 40, height: 10, background: "#F2F7FA", borderRadius: 4, marginLeft: 8 }} />
          </div>
          <span style={{ fontSize: 28, letterSpacing: -1, marginLeft: 12 }}>TRAZA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <p
            style={{
              fontSize: 72,
              lineHeight: 0.95,
              letterSpacing: -2,
              margin: 0,
              fontWeight: 600,
              maxWidth: 920,
            }}
          >
            Una traza para toda la operación.
          </p>
          <p style={{ fontSize: 26, color: "#8EACBE", margin: 0 }}>
            Estudio de software en Ñuñoa. Si no se puede seguir, no está hecho.
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
