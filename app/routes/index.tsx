import { LoaderFunction, redirect } from "@remix-run/node";
import { getSession } from "../sessions";
import { Typography } from "@mui/material";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session) {
    return redirect("/login");
  } else {
    return {};
  }
};

export default function Home() {
  return (
    <>
      <Typography variant="h2">Welcome to my Demo Remix App</Typography>
      <Typography variant="p">
        View the full code{" "}
        <a href="https://github.com/ffluk3/remix-trial">here</a>
      </Typography>
      <Typography variant="p">
        This is an "authenticated" route, simulated via a session cookie built
        into remix
      </Typography>
    </>
  );
}
