import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getTableData } from "~/mock-api";
import { Table } from "../components/Table";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "");
  return json(await getTableData({ page, limit }));
};

export default function Index() {
  const rowData = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        In Progress: Remix demo of server-side pagination tied to native form
        handling
      </h1>
      <Table data={rowData} />
    </div>
  );
}
