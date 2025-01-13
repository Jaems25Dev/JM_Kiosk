/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: [360, 768]
    },
    headers: async () => [
        {
          source: '/favicon.ico',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ],
};

export default nextConfig;
