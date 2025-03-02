"use client";
import { PropsWithChildren } from "react";
import { ThemeProvider as MUiThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <CacheProvider value={cacheRtl}>
      <MUiThemeProvider theme={theme}>
        <CssBaseline>{children}</CssBaseline>
      </MUiThemeProvider>
    </CacheProvider>
  );
}

export default ThemeProvider;
