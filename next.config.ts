import type { NextConfig } from 'next'
const withPWA = require('next-pwa')

const nextConfig: NextConfig = {
   reactStrictMode: true,
   compiler: {
      removeConsole: process.env.NODE_ENV !== 'development'
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
            source: '/sw.js',
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

export default withPWA({
   dest: './public/pwa',
   disable: process.env.NODE_ENV === 'development',
   register: true,
   skipWaiting: true
})(nextConfig)
