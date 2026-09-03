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
          background: "#07080a",
        }}
      >
        <div
          style={{
            width: 10,
            height: 16,
            background: "#c47a4a",
            borderRadius: "50% 50% 45% 45%",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
