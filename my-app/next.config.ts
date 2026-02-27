import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    root: '/Users/libertydesignstudio/dev/expatsargentina/my-app',
  },
};

export default nextConfig;
