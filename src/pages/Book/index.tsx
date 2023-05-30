import BreadCrumbs from "@/components/BreadCrumbs";
import { Box, Container } from "@mui/material";
import BookCart from "./BookCart";
import DescriptionTabs from "./DescriptionTabs";
import RelatedBooks from "./RelatedBooks";
import Reviews from "./Reviews";
import YouMayAlsoLike from "./YouMayAlsoLike";

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
