import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import * as React from "react";

export default function HoverRating() {
  const [value, setValue] = React.useState<number | null>(2);
  const [, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: 1.4,
      }}
    >
      <Rating
        value={value}
        precision={0.5}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(_event, newHover) => {
          setHover(newHover);
        }}
        size="small"
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2, fontSize: "14px" }}>500 Ratings | 400 Reviews</Box>
    </Box>
  );
}
