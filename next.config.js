/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['media.graphassets.com'],
	},
	experimental: {
		typedRoutes: true,
	},
	async rewrites() {
		return [
			{
				source: '/products',
				destination: '/products/1',
			},
			{
				source: '/categories/:slug',
				destination: '/categories/:slug/1',
			},
		];
	},
};

module.exports = nextConfig;
