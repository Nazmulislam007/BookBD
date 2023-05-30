import ActionButton from "@/components/ActionButton";
import {
  Box,
  Container,
  Divider,
  Input,
  Stack,
  Typography,
} from "@mui/material";

export default function ShoppingCart() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Stack direction="row" gap="30px" display="flex">
        <Stack
          direction="column"
          gap="20px"
          flex="1 1 60%"
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
          {/* 1 cart item */}
          <Stack direction="row" gap="15px" alignItems="center">
            <Box component="div" sx={{ width: "80px" }}>
              <img
                src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
                style={{ display: "block", width: "100%" }}
              />
            </Box>
            <Box component="div">
              <Typography
                component="p"
                fontWeight="600"
                fontSize="21px"
                lineHeight="1.4"
              >
                The 7 habits of highly effective people
              </Typography>
              <Typography component="p" fontSize="14px" mt="5px">
                Steven R. Convey
              </Typography>
              <Typography
                component="button"
                fontSize="13px"
                mt="10px"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Remove
              </Typography>
            </Box>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Box
                component="button"
                sx={{
                  border: "1px solid #63422d",
                  height: "36px",
                  width: "36px",
                  borderRadius: "0",
                  "&:hover": {
                    background: "#63422d15",
                  },
                }}
              >
                -
              </Box>
              <Input
                disableUnderline
                sx={{
                  border: "1px solid #63422d",
                  height: "36px",
                  width: "60px",
                }}
                autoComplete="off"
              />

              <Box
                component="button"
                sx={{
                  border: "1px solid #63422d",
                  height: "36px",
                  width: "36px",
                  borderRadius: "0",
                  "&:hover": {
                    background: "#63422d15",
                  },
                }}
              >
                +
              </Box>
            </Stack>
            <Typography component="p" fontSize="20px">
              $13
            </Typography>
          </Stack>
        </Stack>
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
          <Stack
            direction="row"
            gap="10px"
            justifyContent="space-between"
            pb="5px"
          >
            <Typography component="p">Estimated Shipping</Typography>
            <Typography component="p">Free</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" pb={2}>
            <Typography component="p">Estimated Tax</Typography>
            <Typography component="p">$0.00</Typography>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            justifyContent="space-between"
            gap="10px"
            py={2}
          >
            <Typography component="p" fontWeight="600">
              Order Total:
            </Typography>
            <Typography component="p" fontWeight="600">
              $46.34
            </Typography>
          </Stack>
          <ActionButton />
        </Box>
      </Stack>
    </Container>
  );
}
