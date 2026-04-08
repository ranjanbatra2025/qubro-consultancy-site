/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'ext.same-assets.com',
      'images.unsplash.com',
      'upload.wikimedia.org', // ✅ Add this line
    ],
  },
};

export default nextConfig;
