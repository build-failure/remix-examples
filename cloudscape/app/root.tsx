import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import cloudscapeStylesheetUrl from "@cloudscape-design/global-styles/index.css";

import { useState } from "react";
import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Input from "@cloudscape-design/components/input";
import Button from "@cloudscape-design/components/button";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: cloudscapeStylesheetUrl }];
};

export default function App() {
  const [value, setValue] = useState("");

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <SpaceBetween size="m">
        <Header variant="h1">Hello World!</Header>

        <Container>
          <SpaceBetween size="s">
            <span>Start editing to see some magic happen</span>
            <Input
              value={value}
              onChange={(event) => setValue(event.detail.value)}
            />
            <Button variant="primary">Click me</Button>
          </SpaceBetween>
        </Container>
      </SpaceBetween>
      </body>
    </html>
  );
}
