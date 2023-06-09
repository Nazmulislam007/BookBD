import { Books } from "@/Types/Books";
import Image from "@/components/Image";
import PaginationBtn from "@/components/PaginationBtn";
import SelectItem from "@/components/Select";
import { useSubjectBooks } from "@/hooks/data/useBooks";
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
  const [page, setPage] = useState(1);
  const { isLoading, isError, data } = useSubjectBooks({ type: heading, page });

  const newBooks: Partial<Books>[] = data;

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>Error: </span>;

  const changePagination = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
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
          21 - 40 of 100 results
        </Typography>

        <SelectItem />
      </Stack>
      <Grid container spacing={2} py={4}>
        {newBooks.map((book) => (
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
      <PaginationBtn count={8} page={page} onChange={changePagination} />
    </Box>
  );
}
