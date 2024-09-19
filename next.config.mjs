import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "https://m.media-amazon.com/",
      },
    ],
  },
};

export default nextConfig;
