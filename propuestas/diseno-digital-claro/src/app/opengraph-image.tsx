import { ImageResponse } from "next/og";

export const alt = "Nítida — Estudio de diseño digital en Ñuñoa, Santiago";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f2eb",
          color: "#171614",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid #171614",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "14px solid #e7c56a",
              }}
            />
          </div>
          <div style={{ fontSize: 32, letterSpacing: -1 }}>Nítida</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 0.95,
              letterSpacing: -2.4,
              maxWidth: 920,
            }}
          >
            Diseño a luz norte.
          </div>
          <div style={{ fontSize: 24, color: "#6a655c" }}>
            Estudio de diseño digital · Ñuñoa, Santiago
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
