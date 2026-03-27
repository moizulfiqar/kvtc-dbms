import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/KVTC/home.html',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
