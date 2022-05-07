import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import createEmotionCache from "./theme/create-emotion-cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "~/theme";
import createEmotionServer from "@emotion/server/create-instance";

function renderFullPage(html: string, css: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My page</title>
        ${css}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}
export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const serverSideCache = createEmotionCache();

  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(serverSideCache);

  let markup = renderToString(
    <CacheProvider value={serverSideCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RemixServer context={remixContext} url={request.url} />
      </ThemeProvider>
    </CacheProvider>
  );

  const emotionChunks = extractCriticalToChunks(markup);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  responseHeaders.set("Content-Type", "text/html");

  return new Response(renderFullPage(markup, emotionCss), {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
