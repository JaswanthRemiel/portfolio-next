/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Generates static files for GitHub Pages
  basePath: '/portfolio-next', // Replace <repository-name> with the name of your GitHub repository
  trailingSlash: true, // Ensures paths have trailing slashes for GitHub Pages compatibility
};

module.exports = nextConfig;
