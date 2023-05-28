import PaginationBtn from "@/components/PaginationBtn";
import SelectItem from "@/components/Select";
import { Box, Stack, Typography } from "@mui/material";

export default function SubjectResult() {
  return (
    <Box component="div" flex="1 1 55%">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography component="p" fontSize="15px">
          21 - 40 of 100 results
        </Typography>

        <SelectItem />
      </Stack>

      <PaginationBtn />
    </Box>
  );
}
