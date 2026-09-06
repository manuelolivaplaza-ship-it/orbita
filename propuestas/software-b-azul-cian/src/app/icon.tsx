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
          background: "#F2F7FA",
        }}
      >
        <svg width="26" height="26" viewBox="0 0 32 32">
          <rect x="3" y="7" width="22" height="4.2" rx="1.4" fill="#12C4D4" />
          <rect x="8" y="14" width="16" height="4.2" rx="1.4" fill="#1A5FD0" />
          <rect x="5" y="21" width="12" height="4.2" rx="1.4" fill="#0B1F33" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
