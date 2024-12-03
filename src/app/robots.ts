import type { MetadataRoute } from 'next'

export default function Robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/*',
			disallow: ['/admin', '/auth/*', '/order']
		},
		host: 'mahakala.ru',
		sitemap: 'https://sandjma.ru/sitemap.xml'
	}
}
