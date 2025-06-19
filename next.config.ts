import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com']
  },
  output: 'export',
  trailingSlash: true,
  assetPrefix: '/out',
  basePath: '/out',
};

export default nextConfig;
