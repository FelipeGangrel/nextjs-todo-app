import { ThemeProvider } from 'next-themes'
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
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
