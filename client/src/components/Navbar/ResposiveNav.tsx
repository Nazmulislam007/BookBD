import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, ListItem, Typography, styled } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import * as React from "react";
import ResponsiveDropDown from "./SubNavbar/ResponsiveDropDown";

const Search = styled("div")(() => ({
  position: "relative",
  backgroundColor: "#f7f7f7",
  borderTop: "1px solid #dfdfdf",
  marginRight: 0,
  marginLeft: 0,
  width: "100%",
  paddingBlock: "2px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  marginLeft: "2px",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function ResposiveNav() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    document.body.style.overflow = "hidden";
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    document.body.style.overflow = "visible";
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        disableScrollLock
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiList-root": {
            py: 0,
          },
          "& .MuiPaper-root": {
            width: "100%",
          },
        }}
      >
        <ResponsiveDropDown />
        <Search sx={{ display: { xs: "none", sm: "block" } }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <ListItem
          sx={{
            px: 2.8,
            py: "14px",
            backgroundColor: "#f7f7f7",
            borderTop: "1px solid #dfdfdf",
          }}
        >
          <Typography
            component="button"
            sx={{
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: 700,
              textDecoration: "none",
              color: "gray",
              whiteSpace: "nowrap",
            }}
          >
            login / register
          </Typography>
        </ListItem>
      </Menu>
    </Box>
  );
}
