import BreadCrumbs from "@/components/BreadCrumbs";
import { Box, Container } from "@mui/material";
import BookCart from "./BookCart";
import DescriptionTabs from "./DescriptionTabs";
import RelatedBooks from "./RelatedBooks";
import YouMayAlsoLike from "./YouMayAlsoLike";

export default function Book() {
  return (
    <Container maxWidth="lg" sx={{ pt: 2, pb: 5 }}>
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
    </Container>
  );
}
