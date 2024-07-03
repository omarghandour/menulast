/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
