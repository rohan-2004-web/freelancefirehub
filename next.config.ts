import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "freelancefirehub.vercel.app",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // Headers for SEO and Security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Security Headers
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // SEO Headers
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
      // Static assets caching
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/service",
        permanent: true,
      },
    ];
  },

  // Compression
  compress: true,

  // Production source maps disabled for security
  productionBrowserSourceMaps: false,

  // Trailing slash config
  trailingSlash: false,

  // Swallow errors during static generation
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },

  // Environmental variables
  env: {
    SITE_URL: process.env.SITE_URL || "https://freelancefirehub.vercel.app",
  },
};

export default nextConfig;
