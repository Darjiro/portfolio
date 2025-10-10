import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  env: {
    BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

