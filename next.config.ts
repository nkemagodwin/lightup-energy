/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '6a26ff53494af3e82080619a.imgix.net',
      },
    ],
  },
};

module.exports = nextConfig;