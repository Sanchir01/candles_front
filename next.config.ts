import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 's3.timeweb.cloud'
         }
      ]
   },
   
}

export default nextConfig
