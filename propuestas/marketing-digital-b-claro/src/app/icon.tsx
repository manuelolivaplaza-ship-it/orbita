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
          background: "#f4f7f6",
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            display: "flex",
            alignItems: "center",
            border: "1.5px solid #131c1e",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 3,
              background: "#1a6b6e",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
