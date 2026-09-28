import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/airport-transfers",
        destination: "/airport-taxi-bangalore",
        permanent: true,
      },
      {
        source: "/services/rental-packages",
        destination: "/car-rental-bangalore",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;