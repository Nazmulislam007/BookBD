import { Books, SortedBy } from "@/Types/Books";
import BreadCrumbs from "@/components/BreadCrumbs";
import Loading from "@/components/Loading";
import { ActionTypeName } from "@/context/BooksProvider/ActionType";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import { useSubjectBooks } from "@/hooks/useBooks";
import { HeadingFormat } from "@/lib";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FilterBooks from "./components/Filter";
import SubjectResult from "./components/SubjectResult";

type SubjectResultType = {
  books: Books[];
  totalCount: number;
  categories: string[];
  sub_categories: string[];
  authors: string[];
  price: number[];
  filterByRating: number[];
};

export default function Subjects() {
  const { dispatchSort, sortedBooks, filterPrice } = useBooks();
  const limit = 8;
  const location = useLocation();
  const heading = location.pathname.slice(3);
  const formatedHeading = HeadingFormat(decodeURIComponent(heading));
  // active pagination state
  const [page, setPage] = useState(1);
  // console.log(path);
  const {
    filterByAuthors,
    filterByCategories,
    filterBySubCategories,
    filterByRating,
  } = sortedBooks;

  // creating query:
  const type = encodeURIComponent(HeadingFormat(heading));

  const { data, isLoading, isError, error } = useSubjectBooks({
    filterByAuthors,
    filterByCategories,
    filterBySubCategories,
    filterByRating,
    type,
    page,
    limit,
    filterPrice,
  });

  useEffect(() => {
    if (location.pathname === "/s/top-50-books") {
      dispatchSort({
        type: ActionTypeName.SORTED_BY,
        payload: SortedBy.POPULARTIY,
      });
    } else {
      dispatchSort({
        type: ActionTypeName.SORTED_BY,
        payload: SortedBy.MOST_RELEVANT,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  let content = null;

  if (isLoading) content = <Loading />;

  if (isError) content = <span>Error: {(error as any).message}</span>;

  if (!isLoading && !isError) {
    const { books, totalCount }: SubjectResultType = data;

    content = (
      <>
        <Box component="div" flex="1 1 60%">
          <SubjectResult
            books={books}
            setPage={setPage}
            page={page}
            limit={limit}
            total={totalCount}
          />
        </Box>
      </>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ pt: 2, pb: 5 }}>
      <Stack component="header" pb={{ sm: 2, xs: 0 }}>
        <Typography
          component="h4"
          fontSize={{ xs: "1.6rem", sm: "2rem" }}
          textAlign={{ sm: "center", xs: "start" }}
        >
          {formatedHeading}
        </Typography>
        <Typography
          component="p"
          fontSize=".8rem"
          textAlign={{ sm: "center", xs: "start" }}
        >
          Discover the best books to read that are trending right now.
        </Typography>
      </Stack>
      <BreadCrumbs heading={formatedHeading} />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <Box component="div" flex="1 1 270px" maxWidth="350px">
          <FilterBooks type={type} />
        </Box>
        {content}
      </Box>
    </Container>
  );
}
