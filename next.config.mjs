import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      {
        source: "/grilovaci-lavice",
        destination: "/grilovaci-lavice/grilovaci-lorny",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
