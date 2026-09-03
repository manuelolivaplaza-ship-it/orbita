import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0F1A24",
          color: "#C9A86A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontFamily: "Georgia, serif",
          letterSpacing: -1,
          fontWeight: 400,
        }}
      >
        R
      </div>
    ),
    { ...size },
  );
}
