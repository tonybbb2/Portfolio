/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // use: {
  //   loader: 'file-loader',
  //   options: {
  //     name: '[path][name].[ext]',
  //   },
  // },
}
module.exports = {
  future: {
    // Opt-in to webpack@5
    webpack5: true,
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