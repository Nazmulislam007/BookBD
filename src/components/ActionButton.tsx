import { Button } from "@mui/material";

export default function ActionButton() {
  return (
    <Button
      sx={{
        bgcolor: "#63422d",
        "&:hover": {
          bgcolor: "#63422d",
        },
      }}
      variant="contained"
    >
      Order now
    </Button>
  );
}
