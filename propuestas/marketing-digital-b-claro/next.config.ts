import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
