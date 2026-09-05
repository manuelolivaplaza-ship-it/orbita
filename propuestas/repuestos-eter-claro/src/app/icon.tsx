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
          background: "#f1f3f5",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 20,
            border: "1.5px solid #1b242c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 8,
              border: "1.5px solid #5f7f8c",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
