/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images')
module.exports = withImages()

module.exports = nextConfig
