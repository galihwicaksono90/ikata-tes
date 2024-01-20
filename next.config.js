/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "loremflickr.com",
      "api.dev.ikataupn.or.id",
      "api.ikataupn.or.id",
    ],
  },
};

module.exports = nextConfig;
