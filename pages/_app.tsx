import { createGlobalStyle, ThemeProvider } from "styled-components";

import Global from "../styled/Global.styled";
import Head from "next/head";

const theme = {
  colors: {
    primary: "#0070f3",
    dark: "#222",
    grey: "#e5e5e5",
    white: "#fff",
  },
};

function App({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Head>
        <title>Board</title>
        <meta charSet="utf-8" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
