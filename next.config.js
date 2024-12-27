/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.apple.com'],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
