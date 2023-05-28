import { MenuItem, Select, SelectChangeEvent, styled } from "@mui/material";
import React from "react";

const CustomSelect = styled(Select)(() => ({
  border: "1px solid #c3c3c3",
  padding: "0px 14px",
  height: "43px",
  width: "250px",
  backgroundColor: "#fafafa",
  "& .MuiSelect-select:focus": {
    background: "transparent",
  },
}));

const CustomMenuItem = styled(MenuItem)(() => ({
  "&.MuiMenuItem-root.Mui-selected": {
    backgroundColor: "transparent",
  },
}));

export default function SelectItem() {
  const [sort, setSort] = React.useState("More relevant");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setSort(event.target.value as string);
  };

  return (
    <CustomSelect
      disableUnderline
      variant="standard"
      value={sort}
      onChange={handleChange}
    >
      <CustomMenuItem value="More relevant">More relevant</CustomMenuItem>
      <CustomMenuItem value="Sort by popularity">
        Sort by popularity
      </CustomMenuItem>
      <CustomMenuItem value="Sort by price: low to high">
        Sort by price: low to high
      </CustomMenuItem>
      <CustomMenuItem value="Sort by price: high to low">
        Sort by price: high to low
      </CustomMenuItem>
    </CustomSelect>
  );
}
