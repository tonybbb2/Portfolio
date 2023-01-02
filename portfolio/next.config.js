/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  use: {
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  },
}

module.exports = nextConfig
