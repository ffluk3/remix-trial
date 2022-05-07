import { ActionFunction, redirect } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { Form } from "@remix-run/react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { commitSession, getSession } from "~/sessions";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  const formData = await request.formData();
  session.set("username", formData.get("username"));

  return redirect("/table", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

const StyledForm = styled(Form)`
  flex-direction: row;
  justify-content: center;
`;

export default function Index() {
  return (
    <Layout>
      <h1>In Progress: Remix demo of form data</h1>
      <StyledForm method="post" action="/form">
        <TextField name="ff-username" placeholder="Username"></TextField>
        <TextField
          name="ff-password"
          type="password"
          placeholder="Username"
        ></TextField>
        <Button type="submit">Sign In</Button>
      </StyledForm>
    </Layout>
  );
}
