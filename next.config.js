/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  basePath: !debug ? "/taim" : "",
  experimental: {
    appDir: true,
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
