import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "h9-assets.netlify.app",
      },
    ],
  },
};

export default nextConfig;
