//import type { NextConfig } from "next";

const nextConfig= {
  images:{
    domains: ['cdn.sanity.io']
  },
  eslint: {
    // Disable ESLint during production build
    ignoreDuringBuilds: true,
  },
  
};

export default nextConfig;
