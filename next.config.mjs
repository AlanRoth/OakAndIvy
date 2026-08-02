/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/OakAndIvy',
  assetPrefix: '/OakAndIvy/',
  distDir: 'root',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/OakAndIvy',
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig
