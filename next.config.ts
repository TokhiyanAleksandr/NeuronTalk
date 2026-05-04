import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "neurontalks.am",
        pathname: "/storage/**",
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    X_FRONTEND_KEY: process.env.X_FRONTEND_KEY,
  }
};

export default nextConfig;
