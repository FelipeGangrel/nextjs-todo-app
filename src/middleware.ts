import { getIronSession } from 'iron-session/edge'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { sessionOptions } from '@/config/ironSession'
import { guestOnlyGuard, userOnlyGuard } from '@/guards/middlewareGuards'

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next()
  const session = await getIronSession(req, res, sessionOptions)

  const { pathname } = req.nextUrl

  switch (true) {
    case pathname.startsWith('/app'):
      return userOnlyGuard(req, session)
    case pathname.startsWith('/login') || pathname.startsWith('/register'):
      return guestOnlyGuard(req, session)
    default:
      return NextResponse.next()
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)', '/'],
}
