import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
