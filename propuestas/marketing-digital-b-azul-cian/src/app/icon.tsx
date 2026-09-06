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
          background: "#eef5f8",
        }}
      >
        <svg width="18" height="24" viewBox="0 0 22 28" fill="none">
          <path
            d="M11 2 v6"
            stroke="#0e2436"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="11" cy="2.2" r="1.5" fill="#12c4d4" />
          <rect
            x="5.2"
            y="8"
            width="11.6"
            height="17.2"
            rx="5.8"
            stroke="#0e2436"
            strokeWidth="1.6"
          />
          <rect x="5.2" y="14.2" width="11.6" height="4.6" fill="#12c4d4" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
