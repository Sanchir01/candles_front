/** @type {import('next').NextConfig} */
const nextConfig = {
   swcMinify: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 's3.timeweb.cloud'
         }
      ]
   },
   typescript: {
      ignoreBuildErrors: true
   }
}

export default nextConfig
