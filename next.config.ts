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
  // Передаем переменные, которые реально используются в коде:
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    X_FRONTEND_KEY: process.env.NEXT_PUBLIC_X_FRONTEND_KEY,
  }
};

export default nextConfig;