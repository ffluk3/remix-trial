import { data, dataSize } from "./fake-data";

interface Props {
  page: number;
  limit: number;
}
export const getTableData = async ({ page, limit }: Props) => {
  const maxNumPages = dataSize / limit;
  const pageSize = dataSize / maxNumPages;
  const cursor = pageSize * page;
  return data.slice(cursor, cursor + (limit || pageSize));
};
