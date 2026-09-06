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
          background: "#f7f5f0",
        }}
      >
        <div
          style={{
            width: 16,
            height: 22,
            display: "flex",
            flexDirection: "column",
            border: "1.4px solid #171614",
            padding: 2,
            gap: 2,
          }}
        >
          <div
            style={{
              width: 10,
              height: 7,
              background: "#c4922a",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
