/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;
