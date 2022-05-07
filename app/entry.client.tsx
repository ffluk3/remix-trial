import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./theme/create-emotion-cache";

const clientSideCache = createEmotionCache();

hydrate(
  <CacheProvider value={clientSideCache}>
    <RemixBrowser />
  </CacheProvider>,
  document
);
