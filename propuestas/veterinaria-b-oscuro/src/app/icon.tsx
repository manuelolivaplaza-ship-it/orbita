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
          background: "#08090c",
        }}
      >
        <div
          style={{
            width: 12,
            height: 16,
            background: "#e0a84a",
            borderRadius: "40% 40% 30% 30%",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
