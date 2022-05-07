import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import createEmotionCache from "./theme/create-emotion-cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "~/theme";

const serverSideCache = createEmotionCache();

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <CacheProvider value={serverSideCache}>
      <ThemeProvider theme={theme}>
        <RemixServer context={remixContext} url={request.url} />
      </ThemeProvider>
    </CacheProvider>
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
