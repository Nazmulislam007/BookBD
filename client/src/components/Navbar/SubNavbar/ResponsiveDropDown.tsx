import { Stack } from "@mui/material";
import { useState } from "react";
import { subNavItems } from ".";
import DropdownMenu from "./Dropdown";

export default function ResponsiveDropDown() {
  const [activeSubNav, setActiveSubNav] = useState("all");

  return (
    <Stack
      sx={{
        width: "100%",
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
    </Stack>
  );
}
