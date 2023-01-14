import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { darkTheme, globalStyles } from '@root/stitches.config'

export default function App({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
