import { SortedBy } from "@/Types/Books";
import { ActionTypeName } from "@/context/BooksProvider/ActionType";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import { MenuItem, Select, SelectChangeEvent, styled } from "@mui/material";

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
  const { filterBooks, dispatchFilter } = useBooks();

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    dispatchFilter({
      type: ActionTypeName.SORTED_BY,
      payload: event.target.value as string,
    });
  };

  return (
    <CustomSelect
      disableUnderline
      variant="standard"
      value={filterBooks.sortBy}
      onChange={handleChange}
    >
      <CustomMenuItem value={SortedBy.MOST_RELEVANT}>
        {SortedBy.MOST_RELEVANT}
      </CustomMenuItem>
      <CustomMenuItem value={SortedBy.POPULARTIY}>
        {SortedBy.POPULARTIY}
      </CustomMenuItem>
      <CustomMenuItem value={SortedBy.LOW_TO_HIGH}>
        {SortedBy.LOW_TO_HIGH}
      </CustomMenuItem>
      <CustomMenuItem value={SortedBy.HIGH_TO_LOW}>
        {SortedBy.HIGH_TO_LOW}
      </CustomMenuItem>
    </CustomSelect>
  );
}
