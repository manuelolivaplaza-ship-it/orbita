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
          background: "#131210",
        }}
      >
        <div
          style={{
            width: 2,
            height: 16,
            background: "#b99a62",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
