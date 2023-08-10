import { ActionTypeName } from "@/context/BooksProvider/ActionType";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React from "react";

export default function SortByAuthors({
  totalCatagory,
}: {
  totalCatagory: string[];
}) {
  return (
    <FormGroup>
      {totalCatagory.map((category, i) => (
        <SortByAuthor key={i} category={category} />
      ))}
    </FormGroup>
  );
}

const SortByAuthor = ({ category }: { category: string }) => {
  const { dispatchSort } = useBooks();
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    dispatchSort({
      type: ActionTypeName.FILTER_BY_CATEGORY,
      payload: { value: e.target.value, isChecked: e.target.checked },
    });
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          sx={{
            "& .MuiSvgIcon-root": { fontSize: 20 },
            "& + .MuiFormControlLabel-label": {
              fontSize: "14px",
            },

            color: "#63422d",
            "&.Mui-checked": {
              color: "#63422d",
            },
          }}
          value={category}
          onChange={handleChecked}
          checked={checked}
        />
      }
      label={category}
    />
  );
};
