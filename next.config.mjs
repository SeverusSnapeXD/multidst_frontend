/** @type {import('next').NextConfig} */
const nextConfig = {
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
        ]
      },
};

export default nextConfig;
