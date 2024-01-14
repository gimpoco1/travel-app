/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.egruppa.com/:path*',
      },
    ];
  },
  images: {
    domains: ['maps.googleapis.com'],
  },
};