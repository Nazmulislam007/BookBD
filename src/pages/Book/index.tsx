import BreadCrumbs from "@/components/BreadCrumbs";
import { Box, Container } from "@mui/material";
import BookCart from "./BookCart";
import RelatedBooks from "./RelatedBooks";

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
    </Container>
  );
}
