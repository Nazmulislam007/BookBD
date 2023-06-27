/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pagination } from "@mui/material";

type PaginationType = {
  count: number;
  page: number;
  [rest: string]: any;
};

export default function PaginationBtn({
  count,
  page,
  ...rest
}: PaginationType) {
  return <Pagination count={count} page={page} {...rest} />;
}
