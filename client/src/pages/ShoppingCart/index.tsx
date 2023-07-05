import { CartBookType } from "@/Types/Books";
import { useGetCartBooks } from "@/hooks/useAddtoCart";
import { Container, Stack, Typography } from "@mui/material";
import CartItem from "./components/CartItem";
import OrderSummery from "./components/OrderSummery";
import YouMayAlsoLike from "./components/YouMayAlsoLike";

export default function ShoppingCart() {
  const { data, isError, isLoading } = useGetCartBooks();

  const cartBooks: CartBookType[] = data;

  let content;

  if (isError) content = <div>Error...</div>;
  if (isLoading) content = <div>Loading...</div>;
  if (cartBooks?.length <= 0) content = <div>Your Cart is Empty!</div>;
  if (cartBooks?.length > 0 && !isError)
    content = cartBooks.map((book) => <CartItem key={book._id} book={book} />);

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
          {content}
        </Stack>
        {cartBooks?.length > 0 && !isError && (
          <OrderSummery cartBooks={cartBooks} />
        )}
      </Stack>
      <YouMayAlsoLike />
    </Container>
  );
}
