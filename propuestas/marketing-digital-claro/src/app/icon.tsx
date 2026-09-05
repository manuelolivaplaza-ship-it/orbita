import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6f1e6",
        }}
      >
        <div
          style={{
            width: 12,
            height: 22,
            display: "flex",
            justifyContent: "center",
            border: "1.5px solid #1a1712",
          }}
        >
          <div
            style={{
              width: 3,
              height: "100%",
              background: "#f0b429",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
