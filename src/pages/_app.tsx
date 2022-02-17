import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { SWRConfig } from "swr"

import { AlertContextProvider } from "@/contexts/alert"
import { AuthContextProvider } from "@/contexts/index"
import useFetchJson from "@/hooks/useFetchJson"
import GlobalStyle from "@/styles/global"
import { theme } from "@/styles/theme"
import { StylesProvider } from "@material-ui/styles"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SWRConfig
      value={{
        fetcher: useFetchJson,
        onError: err => {
          console.error(err)
        }
      }}
    >
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <AuthContextProvider>
            <AlertContextProvider>
              <Component {...pageProps} />
              <GlobalStyle />
            </AlertContextProvider>
          </AuthContextProvider>
        </StylesProvider>
      </ThemeProvider>
    </SWRConfig>
  )
}

export default App
