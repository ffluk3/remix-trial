import { LoaderFunction, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getTableData } from "~/mock-api";
import { Table } from "../components/Table";
import { msDelay } from "~/mock-api/ms-delay";
import { getSession } from "~/sessions";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  console.log(session.data);

  if (!session.get("username")) {
    return redirect("/login");
  }
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "0");
  const limit = parseInt(url.searchParams.get("limit") || "5");

  await msDelay(Math.random() * 2000);
  return json(await getTableData({ page, limit }));
};

export default function TablePage() {
  const rowData = useLoaderData();
  return (
    <>
      <h1>
        In Progress: Remix demo of server-side pagination tied to native form
        handling
      </h1>
      <Table data={rowData} />
    </>
  );
}
