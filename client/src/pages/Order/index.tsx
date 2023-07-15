import ActionButton from "@/components/ActionButton";
import { Box, Container, Stack, Typography } from "@mui/material";
import SingleOrder from "./Components/SingleOrder";

export default function Order() {
  const book = {
    totalPrice: 1000,
  };
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Stack gap={4}>
        <SingleOrder />
      </Stack>

      <Typography component="p" mt="25px" fontSize="18px" fontWeight="500">
        Total Price : ${book.totalPrice}
      </Typography>
      <Box mt={2}>
        <ActionButton title="Back" />
      </Box>
    </Container>
  );
}
