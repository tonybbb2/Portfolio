const nextConfig = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  images: {
    disableStaticImages: true
  },
  webpack: (cfg) => {
      cfg.module.rules.push(
          {
              test: /\.md$/,
              loader: 'frontmatter-markdown-loader',
              // options: { mode: ['react-component']}
          }
      )
      return cfg;
  },
  target: 'serverless', 
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
