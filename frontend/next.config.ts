import type { NextConfig } from "next";

const SPRING_BOOT_URL = process.env.SPRING_BOOT_URL || "http://localhost:8080";
const useSpring = process.env.NEXT_PUBLIC_USE_SPRING === "true";

const nextConfig: NextConfig = {
  async rewrites() {
    if (!useSpring) return [];
    return [
      {
        source:      "/api/v1/:path*",
        destination: `${SPRING_BOOT_URL}/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
