/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All farm photography ships locally from /public/images.
    // Keep a Wix remote pattern so Wix-hosted images can be referenced
    // without a redeploy if ever needed.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
