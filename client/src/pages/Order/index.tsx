import { OrderDetails } from "@/Types/OrdersType";
import ActionButton from "@/components/ActionButton";
import { useAuth } from "@/context/AuthProvider/AuthProvider";
import { useOrderedBooks } from "@/hooks/useOrderedBooks";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SingleOrder from "./Components/SingleOrder";

export default function Order() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data, isError, isLoading } = useOrderedBooks({
    userId: user.userId,
  });

  const orderDetails: OrderDetails = data;

  let content = null;

  if (!isError && !isLoading) {
    content = (
      <>
        <Stack gap={4}>
          {orderDetails.orders &&
            Object.values(orderDetails.orders).map((orders, i) => (
              <SingleOrder orders={orders} key={i} />
            ))}
        </Stack>
        <Typography component="p" mt="25px" fontSize="18px" fontWeight="500">
          Total Price : ${orderDetails.totalPrice}
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
