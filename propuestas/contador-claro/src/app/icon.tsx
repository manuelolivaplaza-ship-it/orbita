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
          background: "#f6f0e6",
        }}
      >
        <div
          style={{
            width: 16,
            height: 24,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: 6,
            border: "1.5px solid #1b1712",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 3,
              background: "#b45a32",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
