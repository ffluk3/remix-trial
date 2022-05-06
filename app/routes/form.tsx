import { ActionFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { Form } from "@remix-run/react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

// export const action: ActionFunction = async ({ request }) => {
//   const formData = request.formData();
//
//   console.log("Form Data: ", JSON.stringify(formData));
// };

const StyledForm = styled(Form)`
  flex-direction: row;
  justify-content: center;
`;

export default function Index() {
  return (
    <Layout>
      <h1>In Progress: Remix demo of form data</h1>
      <StyledForm method="post" action="/login">
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
