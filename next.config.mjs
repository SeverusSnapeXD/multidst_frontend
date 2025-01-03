/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.csv$/,
      use: 'csv-loader',
    });

    return config;
  },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '8000',
            pathname: '/images/**',
          },
          {
            protocol: 'http',
            hostname: '192.248.16.40',
            port: '',
            pathname: '/images/**',
          },
          {
            protocol: 'https',
            hostname: 'api.multidst.site',
            port: '',
            pathname: '/images/**',
          },
        ]
      },
};

export default nextConfig;
