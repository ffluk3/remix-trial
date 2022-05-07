import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Layout } from "~/components/Layout";
import { html } from "mdast-util-to-markdown/lib/handle/html";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix MUI Table Demo",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          <Layout>
            <Outlet />
          </Layout>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </ThemeProvider>
  );
}
