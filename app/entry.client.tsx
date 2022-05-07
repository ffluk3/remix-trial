import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@emotion/cache";

const clientSideCache = createEmotionCache({
  key: "client-cache",
});

hydrate(
  <CacheProvider value={clientSideCache}>
    <RemixBrowser />
  </CacheProvider>,
  document
);
