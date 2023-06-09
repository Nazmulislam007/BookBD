import { Books } from "@/Types/Books";
import { useBookById } from "@/hooks/data/useBooks";
import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookCart from "./components/BookCart";
import DescriptionTabs from "./components/DescriptionTabs";
import RelatedBooks from "./components/RelatedBooks";
import Reviews from "./components/Reviews";
import YouMayAlsoLike from "./components/YouMayAlsoLike";

export default function Book() {
  const location = useLocation();
  const id = location.pathname.slice(3);

  const { data, refetch, isError, isLoading } = useBookById({ id });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const book: Partial<Books> = data;

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>Error: </span>;

  return (
    <Container maxWidth="lg" sx={{ pt: 2, pb: 10 }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          mt: { md: 4, xs: 3 },
        }}
      >
        <BookCart {...book} />
        <RelatedBooks id={id} />
      </Box>
      <YouMayAlsoLike id={id} />
      <DescriptionTabs book={book} />
      <Reviews />
    </Container>
  );
}
