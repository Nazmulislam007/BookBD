import { UserType } from "@/Types/Books";
import { useAuth } from "@/context/AuthProvider/AuthProvider";
import { ListItem, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import axios from "axios";
import * as React from "react";

export default function AccountAvatar({ user }: { user: UserType }) {
  const { setUser } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSignOut = async () => {
    await axios.delete(`${import.meta.env.VITE_SERVER_URL}/login`, {
      withCredentials: true,
    });
    setUser({});
  };

  return (
    <Box sx={{ ml: { sm: "20px", xs: "5px" }, flexGrow: 1 }}>
      <Stack
        direction="row"
        alignItems="center"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        gap="10px"
        sx={{
          py: "6px",
          px: "7px",
          border: { sm: "1px solid #bdbdbd" },
          borderRadius: "2px",
          cursor: "pointer",
        }}
        onClick={handleOpenNavMenu}
      >
        <Avatar sx={{ width: "36px", height: "36px" }}>
          {user.username.toUpperCase().split("").slice(0, 1)}
        </Avatar>
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
            minWidth: "102px",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          {user.username}
        </Typography>
      </Stack>
      <Menu
        id="menu-appbar"
        disableScrollLock
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          "& .MuiList-root": {
            py: 0,
          },
          "& .MuiPaper-root": {
            width: "250px",
          },
        }}
      >
        <ListItem
          sx={{
            display: { sm: "none", xs: "flex" },
            gap: "10px",
            px: 2.8,
            py: "14px",
            backgroundColor: "#f7f7f7",
            borderTop: "1px solid #dfdfdf",
            outline: "none",
          }}
          onClick={handleOpenNavMenu}
        >
          <Avatar sx={{ width: "36px", height: "36px" }}>
            {user.username.toUpperCase().split("").slice(0, 1)}
          </Avatar>
          <Typography
            sx={{
              minWidth: "102px",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            {user.username}
          </Typography>
        </ListItem>
        <ListItem
          sx={{
            px: 2.8,
            py: "14px",
            backgroundColor: "#f7f7f7",
            borderTop: "1px solid #dfdfdf",
            outline: "none",
          }}
          onClick={handleSignOut}
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
            Sign out
          </Typography>
        </ListItem>
      </Menu>
    </Box>
  );
}
