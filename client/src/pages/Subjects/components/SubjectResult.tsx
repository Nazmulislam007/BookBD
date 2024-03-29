import { Books } from "@/Types/Books";
import PaginationBtn from "@/components/PaginationBtn";
import SelectItem from "@/components/Select";
import SingleBook from "@/components/SingleBook";
import useSorted from "@/hooks/useSorted";
import { Box, Grid, Paper, Stack, Typography, styled } from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
  width: "fit-content",
  margin: "0 auto",
}));

type SubjectResultType = {
  books: Partial<Books>[];
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  limit: number;
  total: number;
};

export default function SubjectResult({
  books,
  setPage,
  page,
  limit,
  total,
}: SubjectResultType) {
  /**
   * Show products in number
   * at the top of the books.
   */
  const [showNum, setShowNum] = useState({
    start: 1,
    end: 8,
  });

  const updatedBooks: Partial<Books>[] = useSorted({ books });
  /**
   * total from database;
   * limit = 8 const
   */
  const count = Math.ceil(total / limit);

  // remaining from total by limit
  const remainCount = total % limit;

  useEffect(() => {
    setShowNum({
      ...showNum,
      start: page * limit - limit + 1,
      end:
        page * limit > total
          ? page * limit - (limit - remainCount)
          : page * limit,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const changePagination = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ sx: "flex-start", sm: "center" }}
        gap={2}
      >
        <Typography component="p" fontSize="15px">
          {showNum.start} - {showNum.end} of {total} results
        </Typography>

        <SelectItem />
      </Stack>
      <Grid container spacing={2} py={4}>
        {updatedBooks.map((book) => (
          <Grid item xs={6} sm={4} lg={3} key={book._id}>
            <Item>
              <SingleBook book={book} />
              <Box px={1}>
                <Typography
                  component="p"
                  lineHeight="1.5"
                  fontSize={{ xs: ".9rem", sm: "1rem" }}
                  fontWeight="600"
                  pb="5px"
                  className="ellipsis"
                >
                  {book.title}
                </Typography>
                <Typography
                  component="p"
                  lineHeight="1.7"
                  sx={{ textDecoration: "underline" }}
                  fontSize={{ xs: ".95rem", sm: "1rem" }}
                  pb="5px"
                >
                  {book.authors?.slice(0, 1)}
                </Typography>
                <Stack direction="row" justifyContent="center" gap={2} mt={0.5}>
                  <Typography
                    component="p"
                    sx={{ textDecoration: "line-through" }}
                    color="GrayText"
                  >
                    ${book.saleInfo?.price}
                  </Typography>
                  <Typography component="p" color="#63422d" fontWeight="600">
                    ${book.saleInfo?.discountPrice}
                  </Typography>
                </Stack>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
      <PaginationBtn count={count} page={page} onChange={changePagination} />
    </>
  );
}
