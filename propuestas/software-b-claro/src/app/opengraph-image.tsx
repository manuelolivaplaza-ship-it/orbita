import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Meridiano — Software con norte.";

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
          background: "#F3F4EF",
          color: "#171916",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "14px solid transparent",
                borderRight: "14px solid transparent",
                borderBottom: "24px solid #D63A2F",
              }}
            />
            <span style={{ fontSize: 28, letterSpacing: -1 }}>MERIDIANO</span>
          </div>
          <span style={{ fontSize: 18, letterSpacing: 3 }}>
            33°25′S · PROVIDENCIA
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              width: 2,
              height: 72,
              background: "#D63A2F",
            }}
          />
          <p
            style={{
              fontSize: 88,
              lineHeight: 0.92,
              letterSpacing: -3,
              margin: 0,
              fontWeight: 600,
            }}
          >
            Software
            <br />
            con norte.
          </p>
          <p style={{ fontSize: 28, color: "#5A6158", margin: 0, maxWidth: 720 }}>
            Taller de software en Santiago. Primero el eje. Después el resto.
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
