import { UserType } from "@/Types/Books";
import ActionButton from "@/components/ActionButton";
import { useAuth } from "@/context/AuthProvider/AuthProvider";
import { useOrderedBooks } from "@/hooks/useOrderedBooks";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SingleOrder from "./Components/SingleOrder";

type OrderType = {
  orders: any[];
};

export default function Order() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data, isError, isLoading } = useOrderedBooks({
    userId: (user.user as UserType).userId,
  });

  let content = null;

  if (!isError && !isLoading) {
    content = (
      <>
        <Stack gap={4}>
          <SingleOrder orders={(data as OrderType).orders} />
        </Stack>
        <Typography component="p" mt="25px" fontSize="18px" fontWeight="500">
          Total Price : ${(data as OrderType).orders[0].totalPrice}
        </Typography>
      </>
    );
  }

  if (isError) {
    content = <div>Something went wrong!</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {content}
      <Box mt={2}>
        <ActionButton title="Back" onClick={() => navigate("/shopping-cart")} />
      </Box>
    </Container>
  );
}
