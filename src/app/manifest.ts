import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		lang: 'ru-RU',
		scope: '/',
		name: 'Mahakala',
		short_name: 'NextPWA',
		description: 'A Progressive Web App built with Next.js',
		start_url: '/',
		dir: 'auto',
		orientation: 'any',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#000000',
		icons: [
			{
				src: 'candles_pwa_512.ico',
				sizes: '512x512',
				type: 'image/ico'
			},
			{
				src: 'candles_pwa_256.ico',
				sizes: '256x256',
				type: 'image/ico'
			},
			{
				src: 'public/128.ico',
				sizes: '128x128',
				type: 'image/ico'
			}
		]
	}
}
