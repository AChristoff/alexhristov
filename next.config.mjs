/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    appDir: true,
    images: {
      unoptimized: true,
    },
  },
}

export default nextConfig
