import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBox from "../SearchBox";
import SubMenuList from "./SubMenuList";

// eslint-disable-next-line react-refresh/only-export-components
export const subNavItems = [
  {
    path: "/",
    name: "all",
  },
  {
    path: "/s/subject",
    name: "subject",
  },
  {
    path: "/catagory",
    name: "catagory",
  },
  {
    path: "/writer",
    name: "writer",
  },
  {
    path: "/bookfair-2023",
    name: "bookfair 2023",
  },
];

export default function SubNav() {
  const location = useLocation();
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

  return (
    <>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          padding: "7px 12px",
          boxShadow: "0 6px 7px -3px #f0f0f0",
        }}
      >
        <SearchBox />
      </Box>
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
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {subNavItems.map((item, index) => (
            <SubMenuList
              key={index}
              item={item}
              lastIndex={index === subNavItems.length - 1}
              activeSubNav={activeSubNav}
              setActiveSubNav={setActiveSubNav}
            />
          ))}
        </Container>
      </AppBar>
    </>
  );
}
