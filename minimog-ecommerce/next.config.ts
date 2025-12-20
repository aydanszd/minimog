import type { NextConfig } from "next";
import { resolve } from 'path';

const turbopackRoot = process.env.TURBOPACK_ROOT
  ? resolve(process.env.TURBOPACK_ROOT)
  : resolve(__dirname);

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  }

};

export default nextConfig;
