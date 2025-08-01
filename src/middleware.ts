// import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Supabase functionality disabled for UI development
  // const supabase = createServerClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   {
  //     cookies: {
  //       getAll() {
  //         return req.cookies.getAll().map(({ name, value }) => ({
  //           name,
  //           value,
  //         }))
  //       },
  //       setAll(cookiesToSet) {
  //         cookiesToSet.forEach(({ name, value, options }) => {
  //           req.cookies.set(name, value)
  //           res.cookies.set(name, value, options)
  //         })
  //       },
  //     },
  //   }
  // )

  // // Refresh session if expired - required for Server Components
  // const { data: { session }, error } = await supabase.auth.getSession()

  // if (error) {
  //   console.error('Auth session error:', error)
  // }

  return res
}

// Ensure the middleware is only called for relevant paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!_next/static|_next/image|favicon.ico|public|api).*)',
  ],
}
