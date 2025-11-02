/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['r2cdn.perplexity.ai', 'user-gen-media-assets.s3.amazonaws.com', 'ppl-ai-code-interpreter-files.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
