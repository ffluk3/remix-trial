import { data } from "./fake-data";

interface Props {
  page: number;
  limit: number;
}
export const getTableData = async ({ page, limit }: Props) => {
  const pageSize = data.length / 4;
  const cursor = pageSize * (page - 1);
  return data.slice(cursor, cursor + (limit || pageSize));
};
