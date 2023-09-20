/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	eslint: {
		ignoreDuringBuilds: true,
	},
	skipMiddlewareUrlNormalize: true,
	skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
