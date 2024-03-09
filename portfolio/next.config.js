/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com"],
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  output: "standalone",
  // use: {
  //   loader: 'file-loader',
  //   options: {
  //     name: '[path][name].[ext]',
  //   },
  // },
}
module.exports = {
  images : {
      domains : [
        'source.unsplash.com',
        'images.unsplash.com',
        'www.0xkishan.com'
      ]
  },
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      // https://github.com/vercel/next.js/issues/7755
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          child_process: false,
          fs: false,
          'builtin-modules': false,
          worker_threads: false,
        },
      }
    }

    return config
  },
}