import { RandomData } from "~/mock-api/fake-data";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { randomUUID } from "crypto";

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
  const rows = data.map((row, index) => ({
    ...row,
    id: `${row.name}-${index}`,
  }));
  return <DataGrid columns={COLUMN_DEFINITION} rows={rows} autoHeight={true} />;
};
