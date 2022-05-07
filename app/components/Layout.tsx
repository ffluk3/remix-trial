import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import styled from "@emotion/styled";
import React from "react";
import { Header } from "~/components/Header";
import Box from "@mui/material/Box";

interface LayoutPropsT {}

const Content = styled(Box)`
  font-family: "system-ui, sans-serif";
  line-height: "1.4";
  justify-content: center;
  align-items: center;
`;

export const Layout: React.FC<LayoutPropsT> = ({ children }) => {
  return (
    <main>
      <Header name="lshadler" />
      <Box
        sx={{
          fontFamily: "system-ui, sans-serif",
          lineHeight: 1.4,
          justifyContent: "center",
          flex: 1,
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </main>
  );
};
