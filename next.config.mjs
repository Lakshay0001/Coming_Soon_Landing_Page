/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  turbopack: {} // explicitly add empty turbopack config to silence error
}

export default nextConfig;
