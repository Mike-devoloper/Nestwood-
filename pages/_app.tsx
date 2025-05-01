
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import {light} from "../scss/MaterialTheme/index"
import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import {useApollo} from "../apollo/client";
import "../scss/app.scss";
import "../scss/pc/main.scss";
import "../scss/mobile/main.scss"

export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const [theme, setTheme] = useState(createTheme(light));
  const client = useApollo(pageProps.initialApolloState)
  // MUI, SOCKET IO, APOLLOPROVIDER.....
  return <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Component {...pageProps} />
  </ThemeProvider>;
  </ApolloProvider>
  
}
