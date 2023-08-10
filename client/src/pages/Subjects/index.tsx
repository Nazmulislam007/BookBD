import BreadCrumbs from "@/components/BreadCrumbs";
import Loading from "@/components/Loading";
import { useSubjectBooks } from "@/hooks/useBooks";
import { HeadingFormat } from "@/lib";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterBooks from "./components/Filter";
import SubjectResult from "./components/SubjectResult";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import { ActionTypeName } from "@/context/BooksProvider/ActionType";
import { SortedBy } from "@/Types/Books";

export default function Subjects() {
  const {dispatchSort} = useBooks()
  const limitCount = 8;
  const location = useLocation();
  const heading = location.pathname.slice(3);
  const formatedHeading = HeadingFormat(decodeURIComponent(heading));
  // active pagination state
  const [page, setPage] = useState(1);

  const { isLoading, isError, data, error } = useSubjectBooks({
    type: HeadingFormat(encodeURIComponent(heading)),
    page,
    limitCount,
  });
  
  useEffect(() => {
    if(location.pathname === "/s/top-50-books"){
      dispatchSort({
        type: ActionTypeName.SORTED_BY,
        payload: SortedBy.POPULARTIY
      })
    }else{
      dispatchSort({
        type: ActionTypeName.SORTED_BY,
        payload: SortedBy.MOST_RELEVANT
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  let content = null;

  if (isLoading) content = <Loading />;

  if (isError) content = <span>Error: {(error as any).message}</span>;

  if (!isLoading && !isError)
    content = (
      <SubjectResult
        newBooks={data?.books}
        setPage={setPage}
        page={page}
        limitCount={limitCount}
        total={data?.totalCount}
      />
    );

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
        <Box component="div" flex="1 1 270px">
          <FilterBooks />
        </Box>
        <Box component="div" flex="1 1 60%">
          {content}
        </Box>
      </Box>
    </Container>
  );
}
