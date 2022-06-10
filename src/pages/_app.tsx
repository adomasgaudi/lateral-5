import "tailwindcss/base.css";
import "../share/styles/Global.css";
import "../app/styles/Local.css";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { useOutline } from "../share/utils/tools/useTools";
import { GlobalStyles, themeFn } from "../share/styles/Themeconfig";
import { Provider } from "react-redux";
import { store } from "../share/utils/state/store";

declare module "react" {
  interface Attributes {
    css?: any;
  }
}

function MyApp({ Component, pageProps }) {
  useOutline();

  return (
    <ThemeProvider theme={themeFn(1, 1)}>
      <Provider store={store}>
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
