import "../styles/globals.css";
// import type { AppProps } from 'next/app' // typescript
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    // ライトモードをデフォルトに設定
    <ThemeProvider attribute="class" defaultTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  )

}

export default MyApp
