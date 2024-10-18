import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
   console.log('middleware')
}

export const config = {
   matcher: ['/auth/:path*', '/admin/:path*']
}
