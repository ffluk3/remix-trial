import { LoaderFunction, redirect } from "@remix-run/node";
import { getSession } from "../sessions";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (session) {
    return redirect("/table");
  } else {
    return redirect("/login");
  }
};
