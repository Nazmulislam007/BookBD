import { ActionTypeName } from "@/context/BooksProvider/ActionType";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import { Box, Rating, Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React from "react";

export default function SortByRatting() {
  return (
    <Box component="div">
      {[5, 4, 3, 2, 1].map((count) => (
        <SortedRating count={count} key={count} />
      ))}
    </Box>
  );
}

function SortedRating({ count }: { count: number }) {
  const { dispatchSort } = useBooks();
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    dispatchSort({
      type: ActionTypeName.FILTER_BY_CATEGORY,
      payload: { value: e.target.value, isChecked: e.target.checked },
    });
  };

  return (
    <Stack direction="row" alignItems="center">
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
        value={count}
        onChange={handleChecked}
        checked={checked}
      />
      <Rating defaultValue={count} size="medium" readOnly />
    </Stack>
  );
}
