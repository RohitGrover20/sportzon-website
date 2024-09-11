/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	eslint: {
		ignoreDuringBuilds: true,
	},
	skipMiddlewareUrlNormalize: true,
	skipTrailingSlashRedirect: true,
	images: {
		domains: ['sportzon-cdn.s3.ap-south-1.amazonaws.com'],
	},
	webpack: (config) => {
		config.externals.push({
			'utf-8-validate': 'commonjs utf-8-validate',
			bufferutil: 'commonjs bufferutil',
			canvas: 'commonjs canvas',
		});
		// config.infrastructureLogging = { debug: /PackFileCache/ };
		return config;
	},
}

module.exports = nextConfig
