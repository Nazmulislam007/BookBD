import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import DropdownMenu from "./Dropdown";

export default function SubNav() {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        color: "black",
        boxShadow: "0 6px 7px -3px #e8e8e8",
        display: { md: "block", xs: "none" },
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <DropdownMenu />
        <DropdownMenu />
        <DropdownMenu />
        <DropdownMenu />
        <DropdownMenu />
        <DropdownMenu />
      </Container>
    </AppBar>
  );
}
