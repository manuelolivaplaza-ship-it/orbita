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
          background: "#f7f3ea",
        }}
      >
        <div
          style={{
            width: 14,
            height: 24,
            display: "flex",
            justifyContent: "center",
            border: "1.5px solid #1b241f",
          }}
        >
          <div
            style={{
              width: 3,
              height: "100%",
              background: "#c4893a",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
