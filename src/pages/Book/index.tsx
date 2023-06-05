import BreadCrumbs from "@/components/BreadCrumbs";
import { Box, Container } from "@mui/material";
import BookCart from "./components/BookCart";
import DescriptionTabs from "./components/DescriptionTabs";
import RelatedBooks from "./components/RelatedBooks";
import Reviews from "./components/Reviews";
import YouMayAlsoLike from "./components/YouMayAlsoLike";

export default function Book() {
  return (
    <Container maxWidth="lg" sx={{ pt: 2, pb: 10 }}>
      <BreadCrumbs />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <BookCart />
        <RelatedBooks />
      </Box>
      <YouMayAlsoLike />
      <DescriptionTabs />
      <Reviews />
    </Container>
  );
}
