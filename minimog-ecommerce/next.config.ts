import type { NextConfig } from "next";
import { resolve } from 'path';

const turbopackRoot = process.env.TURBOPACK_ROOT
  ? resolve(process.env.TURBOPACK_ROOT)
  : resolve(__dirname);

const nextConfig: NextConfig = {
  // Allow overriding the Turbopack root via env var for CI (e.g. Vercel)
  turbopack: {
    root: turbopackRoot,
  },
};

export default nextConfig;
