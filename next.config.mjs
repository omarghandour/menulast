/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
