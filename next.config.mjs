/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      // {
      //   protocol: "https",
      //   hostname: "external-content.duckduckgo.com",
      // },
    ],
  },
};

export default nextConfig;
