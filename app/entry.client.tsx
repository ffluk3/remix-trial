import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./theme/create-emotion-cache";
import { theme } from "~/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const clientSideCache = createEmotionCache();

hydrate(
  <CacheProvider value={clientSideCache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RemixBrowser />
    </ThemeProvider>
  </CacheProvider>,
  document.querySelector("#root")
);
