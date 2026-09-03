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
          background: "#f2f7fa",
        }}
      >
        <svg
          width="26"
          height="16"
          viewBox="0 0 36 20"
          fill="none"
        >
          <path
            d="M1 5C8 1.2 13 8.8 19 5s11-3.8 16 0"
            stroke="#0c1f33"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M1 10C8 6.2 13 13.8 19 10s11-3.8 16 0"
            stroke="#12c4d4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1 15C8 11.2 13 18.8 19 15s11-3.8 16 0"
            stroke="#0c1f33"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
