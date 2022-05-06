import { RandomData, data as RawData } from "~/mock-api/fake-data";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import {
  Form,
  useSearchParams,
  useSubmit,
  useTransition,
} from "@remix-run/react";

interface TableProps {
  data: RandomData[];
}

const COLUMN_DEFINITION: GridColDef[] = [
  {
    field: "name",
  },
  {
    field: "phone",
  },
  {
    field: "postalzip",
  },
  {
    field: "country",
  },
  {
    field: "numberrange",
  },
  {
    field: "text",
  },
  {
    field: "alphanumeric",
  },
];

export const Table: React.FC<TableProps> = ({ data }) => {
  const transition = useTransition();
  const [params] = useSearchParams();
  const [pageSize, setPageSize] = React.useState(
    parseInt(params.get("limit") || "5")
  );
  const [currentPage, setCurrentPage] = React.useState(
    parseInt(params.get("page") || "0")
  );

  const submit = useSubmit();

  const rows = data.map((row, index) => ({
    ...row,
    id: `${row.name}-${index}`,
  }));
  return (
    <React.Fragment>
      <Form method="get">
        <input type="hidden" name="page" value={currentPage} />
        <input type="hidden" name="limit" value={pageSize} />
      </Form>
      <DataGrid
        loading={!!transition.submission}
        columns={COLUMN_DEFINITION}
        rows={rows}
        autoHeight={true}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => {
          setPageSize(newPageSize);
          submit(
            {
              page: currentPage.toString(),
              limit: newPageSize.toString(),
            },
            {
              replace: true,
            }
          );
        }}
        onPageChange={(newPage) => {
          setCurrentPage(newPage);
          submit(
            {
              page: newPage.toString(),
              limit: pageSize.toString(),
            },
            {
              replace: true,
            }
          );
        }}
        rowsPerPageOptions={[5, 10, 15]}
        paginationMode="server"
        rowCount={RawData.length}
      />
    </React.Fragment>
  );
};
