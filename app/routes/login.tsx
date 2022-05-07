import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useSubmit, useTransition } from "@remix-run/react";
import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { commitSession, getSession } from "~/sessions";
import { LoadingButton } from "@mui/lab";
import { msDelay } from "~/mock-api/ms-delay";

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

  await msDelay(Math.random() * 2000);

  return redirect("/table", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export default function Index() {
  const { submission } = useTransition();

  return (
    <>
      <h1>In Progress: Remix demo of form data</h1>
      <Form method="post">
        <Stack maxWidth={500} spacing={2}>
          <TextField name="ff-username" placeholder="Username"></TextField>
          <TextField
            name="ff-password"
            type="password"
            placeholder="Password"
          ></TextField>
          <LoadingButton
            loading={!!submission}
            type="submit"
            variant="outlined"
          >
            Sign In
          </LoadingButton>
        </Stack>
      </Form>
    </>
  );
}
