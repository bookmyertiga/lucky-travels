import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/airport-transfers",
        destination: "/airport-taxi-bangalore",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
