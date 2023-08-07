import { useAuth } from "@/context/AuthProvider/AuthProvider";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { subNavItems } from "./SubNavbar";
import SubMenuList from "./SubNavbar/SubMenuList";

export default function ResposiveNav() {
  const location = useLocation();
  const { user } = useAuth() || {};
  const { setOpenRegister } = useBooks();
  const [activeSubNav, setActiveSubNav] = useState({
    name: "all",
    path: "/",
  });

  useEffect(() => {
    setActiveSubNav({
      name: subNavItems.find((item) => item.path === location.pathname)
        ?.name as string,
      path: location.pathname,
    });
  }, [location.pathname]);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
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
        <Stack
          sx={{
            width: "100%",
          }}
        >
          {subNavItems.map((item, index) => (
            <SubMenuList
              key={index}
              item={item}
              lastIndex={index === subNavItems.length - 1}
              activeSubNav={activeSubNav}
              setActiveSubNav={setActiveSubNav}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          ))}
        </Stack>
        {!user.status && (
          <Stack
            sx={{
              px: "18px",
              py: "14px",
            }}
            onClick={() => {
              setOpenRegister(true);
              handleCloseNavMenu();
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "12px",
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              login / register
            </Typography>
          </Stack>
        )}
      </Menu>
    </Box>
  );
}
