import { Box, Container, Typography } from "@mui/material";

export default function index() {
  return (
    <Container maxWidth="lg" sx={{ pt: 2, pb: 10 }}>
      <Typography component="h2" fontSize="24px" fontWeight="600" my="10px">
        Top Categroies
      </Typography>
      <Box
        component="div"
        sx={{
          display: "grid",
        }}
      >
        <Box>Science fiction</Box>
      </Box>
    </Container>
  );
}
