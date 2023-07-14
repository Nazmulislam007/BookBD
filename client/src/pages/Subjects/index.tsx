import BreadCrumbs from "@/components/BreadCrumbs";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import { useSubjectBooks } from "@/hooks/useBooks";
import { HeadingFormat } from "@/lib";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import FilterSubjects from "./components/FilterSubjects";
import SubjectResult from "./components/SubjectResult";

export default function Subjects() {
  const limitCount = 8;
  const location = useLocation();
  const heading = location.pathname.slice(3);
  const formatedHeading = HeadingFormat(decodeURIComponent(heading));
  const [page, setPage] = useState(1);
  const { search } = useBooks();

  const { isLoading, isError, data } = useSubjectBooks({
    type: heading,
    page,
    limitCount,
    search,
  });

  const newBooks = data?.books;

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>Error: </span>;

  return (
    <Container maxWidth="lg" sx={{ pt: 2, pb: 5 }}>
      <Stack component="header" pb={2}>
        <Typography
          component="h4"
          fontSize={{ xs: "1.6rem", sm: "2rem" }}
          textAlign="center"
        >
          {formatedHeading}
        </Typography>
        <Typography component="p" fontSize=".8rem" textAlign="center">
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
        <FilterSubjects />

        <SubjectResult
          newBooks={newBooks}
          setPage={setPage}
          page={page}
          limitCount={limitCount}
          total={data?.totalCount}
        />
      </Box>
    </Container>
  );
}
