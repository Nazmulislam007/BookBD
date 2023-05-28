import { Box, Container, Typography } from "@mui/material";
import { ReactNode } from "react";

type BodyContainerType = {
  children: ReactNode;
  heading: string;
};

export default function BodyContainer({
  children,
  heading,
}: BodyContainerType) {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box component="header" borderBottom="1px solid #dfdfdf">
        <Typography
          component="h4"
          fontSize="1.8rem"
          fontWeight="600"
          color="#444444"
          mb="0.4rem"
        >
          {heading}
        </Typography>
      </Box>
      {children}
    </Container>
  );
}
