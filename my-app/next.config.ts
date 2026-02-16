import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    root: '/Users/libertydesignstudio/dev/overseer/standalone-repos/expatsargentina/my-app',
  },
};

export default nextConfig;
