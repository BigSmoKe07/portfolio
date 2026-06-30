/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'betterimagesofai.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
