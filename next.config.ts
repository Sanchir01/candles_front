import type { NextConfig } from 'next'
import {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_BUILD
} from 'next/constants.js'
const nextConfig: NextConfig = {
	reactStrictMode: process.env.NODE_ENV === 'development',
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production'
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 's3.timeweb.cloud'
			},
			{
				protocol: 'https',
				hostname: 'picsum.photos'
			},
			{
				protocol: 'https',
				hostname: 'random.imagecdn.app'
			}
		]
	},
	sassOptions: {
		silenceDeprecations: ['legacy-js-api']
	},
	experimental: {
		swcTraceProfiling: true
	},
	compress: true,
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY'
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin'
					}
				]
			},
			{
				source: '/public/pwa/sw.js',
				headers: [
					{
						key: 'Content-Type',
						value: 'application/javascript; charset=utf-8'
					},
					{
						key: 'Cache-Control',
						value: 'no-cache, no-store, must-revalidate'
					},
					{
						key: 'Content-Security-Policy',
						value: "default-src 'self'; script-src 'self'"
					}
				]
			}
		]
	}
}
const nextConfigFunction = async (phase: string) => {
	if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
		const withPWA = (await import('@ducanh2912/next-pwa')).default({
			dest: 'public',
			register: true,
			cacheStartUrl: true,
			disable: process.env.NODE_ENV === 'development'
		})
		return withPWA(nextConfig)
	}
	return nextConfig
}

export default nextConfigFunction
