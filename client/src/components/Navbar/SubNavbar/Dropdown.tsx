import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

export default function DropdownMenu({
  item,
  lastIndex,
  activeSubNav,
  setActiveSubNav,
}: {
  item: {
    path: string;
    name: string;
  };
  lastIndex: boolean;
  activeSubNav: string;
  setActiveSubNav: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Link
      to={`${item.path}`}
      style={{
        borderRight: lastIndex ? "1px solid #dfdfdf" : "0px solid",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
          paddingInline: "18px",
          width: { sm: "fit-content", xs: "100%" },
          borderLeft: "1px solid #dfdfdf",
          borderBottom: { sm: "0px solid", xs: "1px solid #dfdfdf" },
          bgcolor: activeSubNav === item.name ? "#63422d" : "white",
          color: activeSubNav === item.name ? "white" : "#000000",
          py: 1,
          "&:hover > .MuiList-root": {
            transform: "scale(1)",
            opacity: 1,
          },
        }}
        onClick={() => setActiveSubNav(item.name)}
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
        {/* <List
        sx={{
          position: "absolute",
          zIndex: 4,
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
      </List> */}
      </Box>
    </Link>
  );
}
