/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
    // Configure revalidation
    async headers() {
      return [
        {
          source: '/shop/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, s-maxage=3600, stale-while-revalidate=86400', // Cache for 1 hour, revalidate for 24 hours
            },
          ],
        },
      ];
    },
  };

  export default nextConfig;
  