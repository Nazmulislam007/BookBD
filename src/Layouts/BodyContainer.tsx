import { Box, Container, Typography } from "@mui/material";
import { ReactNode } from "react";

type BodyContainerType = {
  children: ReactNode;
  heading: string;
};

const style = {
  hoverStyle: { color: "inherit", "&:hover": { color: "gray" } },
};

export default function BodyContainer({
  children,
  heading,
}: BodyContainerType) {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box
        component="header"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        borderBottom="1px solid #dfdfdf"
      >
        <Typography
          component="h4"
          fontSize="1.8rem"
          fontWeight="600"
          color="#444444"
          mb="0.4rem"
        >
          {heading}
        </Typography>
        <Typography
          component="a"
          href="#"
          sx={{
            mr: "10px",
            color: "inherit",
            "&:hover": {
              color: "GrayText",
            },
          }}
        >
          See More
        </Typography>
      </Box>
      {children}
    </Container>
  );
}
