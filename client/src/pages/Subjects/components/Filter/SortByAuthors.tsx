import { ActionTypeName } from "@/context/BooksProvider/ActionType";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React from "react";

export default function SortByAuthors({ authors }: { authors: string[] }) {
  return (
    <FormGroup>
      {authors.map((author, i) => (
        <SortByAuthor key={i} author={author} />
      ))}
    </FormGroup>
  );
}

const SortByAuthor = ({ author }: { author: string }) => {
  const { dispatchSort } = useBooks();
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    dispatchSort({
      type: ActionTypeName.FILTER_BY_AUTHORS,
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
          value={author}
          onChange={handleChecked}
          checked={checked}
        />
      }
      label={author}
    />
  );
};
