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
          background: "#090b0e",
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            background: "#d6f25c",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
