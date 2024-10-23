/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000', // If you're using localhost on port 3000
                pathname: '/**', // Allow all image paths
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
                pathname: '/**', // Allow all image paths from this domain
            },
        ],
    },
};

export default nextConfig;
