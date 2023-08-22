import { Books } from "@/Types/Books";
import Loading from "@/components/Loading";
import { useBookById } from "@/hooks/useBooks";
import { Box, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import BookCart from "./components/BookCart";
import DescriptionTabs from "./components/DescriptionTabs";
import RelatedBooks from "./components/RelatedBooks";
import Reviews from "./components/Reviews";
import YouMayAlsoLike from "./components/YouMayAlsoLike";

export default function Book() {
  const location = useLocation();
  const id = location.pathname.slice(3);

  const { data, isError, isLoading } = useBookById({ id });

  if (isLoading) return <Loading />;

  if (isError) return <span>Error: </span>;

  const book: Books = data?.book;

  let reviews = null;

  if (book.reviews.length > 0) {
    reviews = <Reviews book={book} avgRating={data?.avgRating} />;
  }

  if (book.reviews.length <= 0) {
    reviews = <div>No reviews found</div>;
  }

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
        <RelatedBooks relatedBooks={data?.relatedData.related} />
      </Box>
      <YouMayAlsoLike youMayAlsoLike={data?.relatedData.youMayAlsoLike} />
      <DescriptionTabs book={book} />
      {reviews}
    </Container>
  );
}
