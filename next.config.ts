import type { NextConfig } from 'next';

const isStaticExport =
  process.env.NEXT_OUTPUT_MODE === 'export' || process.env.CF_PAGES === '1';

const nextConfig: NextConfig = isStaticExport
  ? {
      output: 'export',
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
