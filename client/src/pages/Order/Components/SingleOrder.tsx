import { Box, Stack, Typography } from "@mui/material";
import { Order } from "..";
import CustomizedTimeline from "./Timeline";

export default function SingleOrder({ orders }: { orders: any }) {
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
              {orders.map((order: Order, i: any) => (
                <Stack direction="row" gap="15px" key={i}>
                  <Box component="div" sx={{ minWidth: "80px", width: "80px" }}>
                    <img
                      src={order.img}
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
                      {order.title}
                    </Typography>
                    <Typography component="p" fontSize="13px" mt="5px">
                      {order.author}
                    </Typography>
                  </Box>
                </Stack>
              ))}
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
