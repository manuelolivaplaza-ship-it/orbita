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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0a09",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 18,
            height: 16,
            borderLeft: "1.5px solid #c47a4a",
            borderBottom: "1.5px solid #c47a4a",
            position: "relative",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 6,
            height: 6,
            border: "1px solid #c47a4a",
            borderRadius: 6,
            top: 8,
            right: 7,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
