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
      {
        protocol: "https",
        hostname: "www.neurontalks.am",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    X_FRONTEND_KEY: process.env.NEXT_PUBLIC_X_FRONTEND_KEY,
  },
  // Автоматический редирект с www на без www, чтобы не было конфликтов
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.neurontalks.am",
          },
        ],
        destination: "https://neurontalks.am/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;