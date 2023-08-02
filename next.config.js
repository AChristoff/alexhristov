/**
 * @type {import('next').NextConfig}
*/
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
}
 
module.exports = nextConfig