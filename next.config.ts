import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "3.13.96.254",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
