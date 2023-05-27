import { Box, List, ListItem, Typography } from "@mui/material";

export default function DropdownMenu() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        py: 1,
        "&:hover > .MuiList-root": {
          transform: "scale(1)",
          opacity: 1,
        },
      }}
    >
      <Typography
        component="div"
        sx={{
          cursor: "pointer",
          textTransform: "uppercase",
          fontSize: "12px",
          fontWeight: 600,
          py: 1,
        }}
      >
        Top rated
      </Typography>
      <List
        sx={{
          position: "absolute",
          transform: "scale(0)",
          opacity: 0,
          minWidth: "300px",
          bgcolor: "white",
          boxShadow: "1px 1px 15px rgba(0,0,0,.15)",
          borderRadius: "5px",
          "& > *": {
            cursor: "pointer",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: 600,
            color: "GrayText",
            "&:hover": {
              textDecoration: "underline",
            },
          },
        }}
      >
        <ListItem>Profile</ListItem>
        <ListItem>My account</ListItem>
        <ListItem>Logout</ListItem>
      </List>
    </Box>
  );
}
