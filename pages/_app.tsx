import { createGlobalStyle, ThemeProvider } from "styled-components";

import Global from "../styled/Global.styled";

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
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
