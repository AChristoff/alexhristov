/**
 * @type {import('next').NextConfig}
*/
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
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