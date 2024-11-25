/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Required for static export
  basePath: '/portfolio-next', // Replace with your GitHub repository name
  assetPrefix: '/portfolio-next/', // Same as basePath
};

module.exports = nextConfig;
