import { Box, Input, Stack, Typography } from "@mui/material";

export default function CartItem() {
  return (
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
  );
}
