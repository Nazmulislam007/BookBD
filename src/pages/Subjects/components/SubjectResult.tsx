import { Books, SortedBy } from "@/Types/Books";
import Image from "@/components/Image";
import PaginationBtn from "@/components/PaginationBtn";
import SelectItem from "@/components/Select";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import { useSubjectBooks } from "@/hooks/useBooks";
import { Box, Grid, Paper, Stack, Typography, styled } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
  width: "fit-content",
}));

type SubjectResultType = {
  heading: string;
};

export default function SubjectResult({ heading }: SubjectResultType) {
  const { filterBooks } = useBooks();
  const limitCount = 8;
  const [page, setPage] = useState(1);
  const [showNum, setShowNum] = useState({
    start: 1,
    end: 8,
  });
  const { isLoading, isError, data } = useSubjectBooks({
    type: heading,
    page,
    limitCount,
  });

  const newBooks: Partial<Books>[] = data?.data;

  function sortBooks() {
    switch (filterBooks.sortBy) {
      case SortedBy.MOST_RELEVANT: {
        return newBooks.sort(
          (a, b) =>
            new Date(a.publishedDate || "").valueOf() -
            new Date(b.publishedDate || "").valueOf()
        );
      }
      case SortedBy.POPULARTIY: {
        return newBooks.sort(
          (a, b) =>
            (b.saleInfo?.totalSales || 0) - (a.saleInfo?.totalSales || 0)
        );
      }
      case SortedBy.LOW_TO_HIGH: {
        return newBooks.sort(
          (a, b) =>
            (a.saleInfo?.discountPrice || 0) - (b.saleInfo?.discountPrice || 0)
        );
      }
      case SortedBy.HIGH_TO_LOW: {
        return newBooks.sort(
          (a, b) =>
            (b.saleInfo?.discountPrice || 0) - (a.saleInfo?.discountPrice || 0)
        );
      }
      default: {
        return newBooks;
      }
    }
  }

  // count the pagination
  const count = Math.ceil(data?.total / 8);

  // remaining from total by limitcount
  const remainCount = data?.total % limitCount;

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>Error: </span>;

  const changePagination = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setShowNum({
      ...showNum,
      start: value * limitCount - limitCount + 1,
      end:
        value * limitCount > data?.total
          ? value * limitCount - (limitCount - remainCount)
          : value * limitCount,
    });
  };

  return (
    <Box component="div" flex="1 1 60%">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Typography component="p" fontSize="15px">
          {showNum.start} - {showNum.end} of {data?.total} results
        </Typography>

        <SelectItem />
      </Stack>
      <Grid container spacing={2} py={4}>
        {sortBooks().map((book) => (
          <Grid item xs={6} sm={4} lg={3} key={book.id}>
            <Link to={`/b/${book.id}`}>
              <Item>
                <Image
                  src={book.imageLinks?.thumbnail || ""}
                  className="responsive__img"
                />
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
                  <Stack
                    direction="row"
                    justifyContent="center"
                    gap={2}
                    mt={0.5}
                  >
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
            </Link>
          </Grid>
        ))}
      </Grid>
      <PaginationBtn count={count} page={page} onChange={changePagination} />
    </Box>
  );
}
