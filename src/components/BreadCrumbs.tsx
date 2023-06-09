import { HeadingFormat } from "@/hooks/lib";
import { Box, Typography } from "@mui/material";

type BreadPropsType = {
  heading: string;
};

export default function BreadCrumbs({ heading }: BreadPropsType) {
  return (
    <Box component="div" py={2}>
      <Typography component="a" fontSize=".9rem">
        Books{" "}
      </Typography>
      <Typography component="a" fontSize=".9rem">
        / {HeadingFormat(heading)}
      </Typography>
      {/* <Typography component="a" fontSize=".9rem">
        / Most relavent
      </Typography> */}
    </Box>
  );
}
