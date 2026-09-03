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
          background: "#070706",
        }}
      >
        <div
          style={{
            width: 1,
            height: 22,
            background: "#c4b08a",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 8,
            height: 8,
            border: "1px solid #c4b08a",
            borderRadius: 8,
            top: 12,
            left: 12,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
