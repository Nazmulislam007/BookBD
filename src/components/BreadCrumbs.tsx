import { Box, Typography } from "@mui/material";

export default function BreadCrumbs() {
  return (
    <Box component="div" py={2}>
      <Typography component="a" fontSize=".9rem">
        Books{" "}
      </Typography>
      <Typography component="a" fontSize=".9rem">
        / Accounting{" "}
      </Typography>
      <Typography component="a" fontSize=".9rem">
        / Most relavent
      </Typography>
    </Box>
  );
}
