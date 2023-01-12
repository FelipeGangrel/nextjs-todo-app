import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { darkTheme, globalStyles } from "@root/stitches.config";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
