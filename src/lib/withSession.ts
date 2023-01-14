import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next'
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from 'next'

import { sessionOptions } from '@/config/ironSession'

export function withSessionRoute<T>(handler: NextApiHandler<T>) {
  return withIronSessionApiRoute(handler, sessionOptions)
}

export function withSessionSsr<
  P extends { [key: string]: any } = { [key: string]: any }
>(
  handler: (
    context: GetServerSidePropsContext
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
  return withIronSessionSsr(handler, sessionOptions)
}
