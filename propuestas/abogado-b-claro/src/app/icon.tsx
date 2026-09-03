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
          background: "#f3f4ef",
        }}
      >
        <div
          style={{
            width: 16,
            height: 24,
            display: "flex",
            justifyContent: "center",
            border: "1.5px solid #1a1c18",
          }}
        >
          <div
            style={{
              width: 3,
              height: "100%",
              background: "#c44b28",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
