import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import AccountAction from "./AccountAction";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        color: "black",
        boxShadow: "none",
        paddingBlock: 0.1,
        border: "1px solid #dfdfdf",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Logo />

          <SearchBox />

          <AccountAction />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
