/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['media.graphassets.com'],
	},
	experimental: {
		typedRoutes: true,
		serverActions: true,
		workerThreads: false,
		cpus: 1,
	},
	async redirects() {
		return [
			{
				source: '/products',
				destination: '/products/1',
				permanent: true,
			},
			{
				source: '/categories/:slug',
				destination: '/categories/:slug/1',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
