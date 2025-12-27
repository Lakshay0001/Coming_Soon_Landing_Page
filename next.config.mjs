/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  }, // ✅ comma here
  logging: {
    fetches: {
      fullUrl: true,
    },
  }, // ✅ comma here
  turbopack: {}, // explicitly add empty turbopack config to silence error
}

export default nextConfig