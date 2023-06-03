import BreadCrumbs from "@/components/BreadCrumbs";
import { Box, Container, Stack, Typography } from "@mui/material";
import FilterSubjects from "./FilterSubjects";
import SubjectResult from "./SubjectResult";

export default function Subjects() {
  return (
    <Container maxWidth="lg" sx={{ pt: 2, pb: 5 }}>
      <Stack component="header" pb={2}>
        <Typography
          component="h4"
          fontSize={{ xs: "1.6rem", sm: "2rem" }}
          textAlign="center"
        >
          Top 100: Bestselling Books
        </Typography>
        <Typography component="p" fontSize=".8rem" textAlign="center">
          Discover the best books to read that are trending right now.
        </Typography>
      </Stack>
      <BreadCrumbs />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <FilterSubjects />

        <SubjectResult />
      </Box>
    </Container>
  );
}
