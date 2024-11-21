import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
   compress: true
}

export default nextConfig
