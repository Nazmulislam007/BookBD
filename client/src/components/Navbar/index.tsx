import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import AccountAction from "./AccountAction";
import Logo from "./Logo";
import ResposiveNav from "./ResposiveNav";
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
          <Stack direction="row" alignItems="center">
            <ResposiveNav />
            <Logo />
          </Stack>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchBox />
          </Box>

          <AccountAction />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
