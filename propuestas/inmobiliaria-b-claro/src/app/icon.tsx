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
          background: "#f4efe3",
        }}
      >
        <div
          style={{
            width: 18,
            height: 24,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            border: "1.4px solid #1b1914",
            padding: 3,
          }}
        >
          <div
            style={{
              width: 9,
              height: 11,
              background: "#c24e2f",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
