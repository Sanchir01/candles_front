import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: 'Next.js PWA',
      short_name: 'NextPWA',
      description: 'A Progressive Web App built with Next.js',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
         {
            src: '../../public/candles_pwa_512.ico',
            sizes: '512x512',
            type: 'image/ico'
         },
         {
            src: '../../public/candles_pwa_256.ico',
            sizes: '256x256',
            type: 'image/ico'
         },
         {
            src: '../../public/128.ico',
            sizes: '128x128',
            type: 'image/ico'
         }
      ]
   }
}
