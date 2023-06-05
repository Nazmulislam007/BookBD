import { Box, Divider, Stack, Typography } from "@mui/material";

export default function RelatedBooks() {
  return (
    <Box flex="1 1 300px">
      <Typography component="p" fontWeight="600">
        Related Products
      </Typography>
      <Stack direction="row" gap="10px" py={2}>
        <Box component="div" sx={{ width: "60px" }}>
          <img
            src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1400203813&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US"
            style={{ display: "block", width: "100%" }}
          />
        </Box>
        <Box component="div">
          <Typography
            component="p"
            sx={{
              fontWeight: "600",
              fontSize: ".9rem",
              textOverflow: "ellipsis",
              width: "150px",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            Building a story brand story brand
          </Typography>
          <Typography component="p" fontSize=".9rem">
            Donald miller
          </Typography>
          <Stack direction="row" gap={2} mt={0.5}>
            <Typography
              component="p"
              sx={{ textDecoration: "line-through" }}
              color="GrayText"
            >
              $10
            </Typography>
            <Typography component="p" color="#63422d" fontWeight="600">
              $8
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Divider />
    </Box>
  );
}
