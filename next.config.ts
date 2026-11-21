import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async rewrites() {
    return [{ source: "/l/kal27", destination: "/kal27/index.html" }];
  },
};

export default nextConfig;
