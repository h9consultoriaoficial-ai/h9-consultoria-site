/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "h9-assets.netlify.app",
      },
    ],
  },
};

module.exports = nextConfig;
