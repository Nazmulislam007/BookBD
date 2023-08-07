import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { useState } from "react";
import DropdownMenu from "./Dropdown";

// eslint-disable-next-line react-refresh/only-export-components
export const subNavItems = [
  {
    path: "/",
    name: "all",
  },
  {
    path: "/book",
    name: "book",
  },
  {
    path: "/s/subject",
    name: "subject",
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
  const [activeSubNav, setActiveSubNav] = useState("all");

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
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {subNavItems.map((item, index) => (
          <DropdownMenu
            key={index}
            item={item}
            lastIndex={index === subNavItems.length - 1}
            activeSubNav={activeSubNav}
            setActiveSubNav={setActiveSubNav}
          />
        ))}
      </Container>
    </AppBar>
  );
}
