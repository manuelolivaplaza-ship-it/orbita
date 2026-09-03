import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#070706",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 22,
            height: 32,
            background: "#C4A574",
            clipPath: "polygon(50% 0%, 100% 32%, 82% 100%, 18% 100%, 0% 32%)",
          }}
        />
      </div>
    ),
    size,
  );
}
