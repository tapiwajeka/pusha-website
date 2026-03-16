import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.pusha.co.zw',
      },
    ],
  },
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
