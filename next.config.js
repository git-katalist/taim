/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
