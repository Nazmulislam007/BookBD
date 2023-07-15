import { Box, Stack, Typography } from "@mui/material";
import CustomizedTimeline from "./Timeline";

export default function SingleOrder() {
  const book = {
    img: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1546004009&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=techweb04-20&language=en_US",
    title: "The 7 habit of highly effective people.",
    author: "Steven R. covey",
    quantity: 4,
  };
  return (
    <Box sx={{ border: "1px solid #dfdfdf", py: 3, px: 4 }}>
      <Stack component="header" pb={1}>
        <Typography component="h4" fontSize="1.6rem" fontWeight="500">
          My order 1
        </Typography>
      </Stack>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Box flex="1 1 55%">
            <Box>
              <Typography
                component="p"
                fontSize="14px"
                fontWeight="500"
                color="GrayText"
              >
                Order Items 4
              </Typography>
              <Typography
                component="p"
                fontSize="13px"
                fontWeight="600"
                color="GrayText"
              >
                Expected Completion
              </Typography>
              <Typography
                component="p"
                fontSize="13px"
                fontWeight="500"
                color="GrayText"
              >
                Oct 12, 2019
              </Typography>
            </Box>
            <Stack gap="10px" mt={3}>
              <Stack direction="row" gap="15px">
                <Box component="div" sx={{ minWidth: "80px", width: "80px" }}>
                  <img
                    src={book.img}
                    style={{
                      display: "block",
                      maxWidth: "100%",
                    }}
                  />
                </Box>
                <Box component="div">
                  <Typography
                    component="p"
                    fontWeight="600"
                    fontSize="18px"
                    lineHeight="1.4"
                  >
                    {book.title}
                  </Typography>
                  <Typography component="p" fontSize="13px" mt="5px">
                    {book.author}
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" gap="15px">
                <Box component="div" sx={{ minWidth: "80px", width: "80px" }}>
                  <img
                    src={book.img}
                    style={{
                      display: "block",
                      maxWidth: "100%",
                    }}
                  />
                </Box>
                <Box component="div">
                  <Typography
                    component="p"
                    fontWeight="600"
                    fontSize="18px"
                    lineHeight="1.4"
                  >
                    {book.title}
                  </Typography>
                  <Typography component="p" fontSize="13px" mt="5px">
                    {book.author}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>
          <Box
            flex="1 1 40%"
            sx={{ bgcolor: "whitesmoke", py: 2, borderRadius: "10px" }}
          >
            <CustomizedTimeline />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
