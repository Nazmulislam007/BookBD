import ActionButton from "@/components/ActionButton";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function OrderSummery() {
  return (
    <Box
      component="div"
      flex="1 1 250px"
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
        <Typography component="p">SubTotal (2 Items)</Typography>
        <Typography component="p">$46.34</Typography>
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
          $46.34
        </Typography>
      </Stack>
      <ActionButton />
    </Box>
  );
}
