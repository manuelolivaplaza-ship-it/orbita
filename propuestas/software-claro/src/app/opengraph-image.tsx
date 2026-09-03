import { ImageResponse } from "next/og";

export const alt = "Alba — Estudio de software en Santiago";
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
          background: "#f4efe6",
          color: "#1c1710",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 999,
              border: "1.5px solid #b4632a",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 8,
            }}
          >
            <div
              style={{
                width: 22,
                height: 11,
                border: "1.5px solid #1c1710",
                borderBottom: "none",
                borderTopLeftRadius: 22,
                borderTopRightRadius: 22,
              }}
            />
          </div>
          <div style={{ fontSize: 32, letterSpacing: -1 }}>Alba</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 0.95,
              letterSpacing: -2.4,
              maxWidth: 900,
            }}
          >
            El software debería sentirse obvio.
          </div>
          <div style={{ fontSize: 24, color: "#6f6558" }}>
            Estudio de software · Santiago, Chile
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
