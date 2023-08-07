import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

export default function SubMenuList({
  item,
  lastIndex,
  activeSubNav,
  setActiveSubNav,
  handleCloseNavMenu,
}: {
  item: {
    path: string;
    name: string;
  };
  lastIndex: boolean;
  activeSubNav: {
    path: string;
    name: string;
  };
  setActiveSubNav: Dispatch<SetStateAction<{ name: string; path: string }>>;
  handleCloseNavMenu?: () => void;
}) {
  return (
    <Link
      to={`${item.path}`}
      style={{
        borderRight: lastIndex ? "1px solid #dfdfdf" : "0px solid",
      }}
      onClick={() => handleCloseNavMenu && handleCloseNavMenu()}
    >
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
          paddingInline: "18px",
          width: { sm: "fit-content", xs: "100%" },
          borderLeft: "1px solid #dfdfdf",
          borderBottom: { sm: "0px solid", xs: "1px solid #dfdfdf" },
          bgcolor: activeSubNav.name === item.name ? "#63422d" : "white",
          color: activeSubNav.name === item.name ? "white" : "#000000",
          py: 1,
          "&:hover > .MuiList-root": {
            transform: "scale(1)",
            opacity: 1,
          },
        }}
        onClick={() =>
          setActiveSubNav({
            name: item.name,
            path: item.path,
          })
        }
      >
        <Typography
          component="div"
          sx={{
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: 600,
            py: 1,
          }}
        >
          {item.name}
        </Typography>
      </Box>
    </Link>
  );
}
