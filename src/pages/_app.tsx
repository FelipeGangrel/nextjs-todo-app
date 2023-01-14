import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { AppPropsWithLayout } from '@/contracts/common'
import { darkTheme, globalStyles } from '@root/stitches.config'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  globalStyles()
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      value={{
        dark: darkTheme.className,
        light: 'light',
      }}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
