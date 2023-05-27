import { Typography } from "@mui/material";

export default function Logo() {
  return (
    <Typography
      variant="h5"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: "flex",
        fontFamily: "monospace",
        fontWeight: 700,
        color: "inherit",
        textDecoration: "none",
      }}
    >
      BookBD.
    </Typography>
  );
}
