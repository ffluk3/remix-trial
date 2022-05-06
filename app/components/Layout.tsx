import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import styled from "@emotion/styled";
import React from "react";
import { Header } from "~/components/Header";

interface LayoutPropsT {}

const Content = styled.div`
  font-family: "system-ui, sans-serif";
  line-height: "1.4";
`;

export const Layout: React.FC<LayoutPropsT> = ({ children }) => {
  return (
    <main>
      <Header name="lshadler" />
      <Content>{children}</Content>
    </main>
  );
};
