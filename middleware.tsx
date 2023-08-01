import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.url.pathname === '/') {
    return NextResponse.rewrite(new URL('/blogpage/home', request.url))
  }
}
