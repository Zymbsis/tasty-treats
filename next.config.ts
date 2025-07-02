import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      new URL("https://ftp.goit.study/**"),
      new URL("https://tasty-treats-backend.p.goit.global/**"),
    ],
  },
};

export default nextConfig;
