import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = {}> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
