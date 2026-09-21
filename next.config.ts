import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "neurontalks.am",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
  env: {
    API_URL: process.env.API_URL,
    X_FRONTEND_KEY: process.env.X_FRONTEND_KEY,
  }
};

export default nextConfig;
