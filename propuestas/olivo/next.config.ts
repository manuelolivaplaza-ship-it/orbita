import type { NextConfig } from "next";

/** En el build de la galería Reclu: NEXT_BASE_PATH=/propuestas/olivo */
const basePath = process.env.NEXT_BASE_PATH?.trim() || undefined;

const nextConfig: NextConfig = {
  ...(basePath ? { basePath } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
