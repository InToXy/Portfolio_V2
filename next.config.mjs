/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Portfolio_V2',
  assetPrefix: '/Portfolio_V2/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig