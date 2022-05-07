import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import createEmotionCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const serverSideCache = createEmotionCache({
  key: "server-cache",
});
export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <CacheProvider value={serverSideCache}>
      <RemixServer context={remixContext} url={request.url} />
    </CacheProvider>
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
