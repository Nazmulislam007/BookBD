import { CartBookType } from "@/Types/Books";
import ActionButton from "@/components/ActionButton";
import { Box, Divider, Stack, Typography } from "@mui/material";
import axios from "axios";

export default function OrderSummery({
  cartBooks,
}: {
  cartBooks: CartBookType[];
}) {
  const totalPrice: number = cartBooks?.reduce(
    (prev, curr) => prev + curr.totalPrice,
    0
  );

  const totalQty: number = cartBooks?.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );

  const handlePayment = async () => {
    await axios
      .post(`${import.meta.env.VITE_SERVER_URL}/create-payment-session`, {
        currency: "USD",
        price: totalPrice,
      })
      .then(({ data }) => {
        window.location.href = data.url;
      });
  };

  return (
    <Box
      component="div"
      flex="1 1 280px"
      border="1px solid #dfdfdf"
      px={3}
      pb={3}
    >
      <Typography
        component="h4"
        fontSize="1.8rem"
        py={2}
        borderBottom="1px solid #dfdfdf"
      >
        Order Summary
      </Typography>
      <Stack
        direction="row"
        gap="10px"
        justifyContent="space-between"
        pt={2}
        pb="5px"
      >
        <Typography component="p">SubTotal ({totalQty} Items)</Typography>
        <Typography component="p">${totalPrice}</Typography>
      </Stack>
      <Stack direction="row" gap="10px" justifyContent="space-between" pb="5px">
        <Typography component="p">Estimated Shipping</Typography>
        <Typography component="p">Free</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" pb={2}>
        <Typography component="p">Estimated Tax</Typography>
        <Typography component="p">$0.00</Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" gap="10px" py={2}>
        <Typography component="p" fontWeight="600">
          Order Total:
        </Typography>
        <Typography component="p" fontWeight="600">
          ${totalPrice}
        </Typography>
      </Stack>
      <ActionButton title="Order Now" onClick={handlePayment} />
    </Box>
  );
}
