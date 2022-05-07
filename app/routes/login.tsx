import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { Form } from "@remix-run/react";
import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { commitSession, getSession } from "~/sessions";
import Box from "@mui/material/Box";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.get("username")) {
    return redirect("/table");
  }

  return {};
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  const formData = await request.formData();
  session.set("username", formData.get("ff-username"));

  return redirect("/table", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export default function Index() {
  return (
    <Layout>
      <h1>In Progress: Remix demo of form data</h1>
      <Form method="post">
        <Stack maxWidth={500} spacing={2}>
          <TextField name="ff-username" placeholder="Username"></TextField>
          <TextField
            name="ff-password"
            type="password"
            placeholder="Password"
          ></TextField>
          <Button type="submit" variant="outlined">
            Sign In
          </Button>
        </Stack>
      </Form>
    </Layout>
  );
}
