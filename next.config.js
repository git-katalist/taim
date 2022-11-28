/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    loader: "akamai",
    path: `/${repo}`,
  },
};

module.exports = nextConfig;
