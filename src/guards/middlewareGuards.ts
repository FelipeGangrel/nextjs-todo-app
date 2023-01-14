import { IronSession } from 'iron-session'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function userOnlyGuard(req: NextRequest, session: IronSession) {
  if (!session?.user) {
    return NextResponse.redirect(new URL('/login', req.nextUrl.origin))
  }
  return NextResponse.next()
}

export async function guestOnlyGuard(req: NextRequest, session: IronSession) {
  if (session?.user) {
    return NextResponse.redirect(new URL('/app', req.nextUrl.origin))
  }
  return NextResponse.next()
}
