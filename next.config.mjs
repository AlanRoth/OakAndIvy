/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/OakAndIvy',
  assetPrefix: '/OakAndIvy/',

  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig