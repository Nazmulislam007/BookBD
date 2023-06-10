import { Container, Stack, Typography } from "@mui/material";
import CartItem from "./components/CartItem";
import OrderSummery from "./components/OrderSummery";
import YouMayAlsoLike from "./components/YouMayAlsoLike";

export default function ShoppingCart() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Stack direction="row" gap="30px" flexWrap="wrap">
        <Stack
          direction="column"
          gap="20px"
          flex="1 1 70%"
          border="1px solid #dfdfdf"
          pb={3}
          px={4}
        >
          <Typography
            component="h4"
            fontSize="1.8rem"
            fontWeight="600"
            color="#444444"
            borderBottom="1px solid #dfdfdf"
            py={2}
          >
            My Shopping Cart
          </Typography>

          <CartItem />
        </Stack>
        <OrderSummery />
      </Stack>
      <YouMayAlsoLike />
    </Container>
  );
}
