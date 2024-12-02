import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'abs.twimg.com' },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/creator-troubleshooting',
        destination: '/blog/introducing-pearai-creator-beta',
        permanent: true,
      },
      {
        source: '/features/tab-autocomplete',
        destination: '/docs/tab-autocomplete',
        permanent: true,
      },
      {
        source: '/download',
        destination: '/pricing',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);