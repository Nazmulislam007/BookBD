import { Box, Rating, Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

export default function SortByRatting() {
  return (
    <Box component="div">
      {[5, 4, 3, 2, 1].map((count) => (
        <Stack direction="row" key={count} alignItems="center">
          <Checkbox
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 20 },
              "& + .MuiFormControlLabel-label": {
                fontSize: "14px",
              },

              color: "#63422d",
              "&.Mui-checked": {
                color: "#63422d",
              },
            }}
          />
          <Rating defaultValue={count} size="medium" readOnly />
        </Stack>
      ))}
    </Box>
  );
}
