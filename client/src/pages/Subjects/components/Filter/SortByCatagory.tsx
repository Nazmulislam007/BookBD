import { ActionTypeName } from "@/context/BooksProvider/ActionType";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React, { useEffect, useRef } from "react";

export default function SortByCategories({
  totalCatagory,
  cate,
}: {
  totalCatagory: string[];
  cate: boolean;
}) {
  return (
    <FormGroup>
      {totalCatagory?.map((category, i) => (
        <SortByCategory key={i} category={category} cate={cate} />
      ))}
    </FormGroup>
  );
}

const SortByCategory = ({
  category,
  cate,
}: {
  cate: boolean;
  category: string;
}) => {
  const checkRef = useRef<HTMLInputElement>(null);
  const { dispatchSort, sortedBooks } = useBooks();
  const [checked, setChecked] = React.useState<boolean>(false);

  const isCateChecked = sortedBooks.filterByCategories.find(
    (cate) => category === cate
  );

  const isSubCateChecked = sortedBooks.filterBySubCategories.find(
    (cat) => category === cat
  );

  useEffect(() => {
    if (sortedBooks.filterByCategories.length > 0) {
      if (isCateChecked) {
        setChecked(true);
      }
    }
    if (sortedBooks.filterBySubCategories.length > 0 && cate) {
      if (isSubCateChecked) {
        setChecked(true);
      }
    }
  }, [
    cate,
    isCateChecked,
    isSubCateChecked,
    sortedBooks.filterByCategories,
    sortedBooks.filterBySubCategories,
  ]);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);

    dispatchSort({
      type: cate
        ? ActionTypeName.FILTER_BY_CATEGORIES
        : ActionTypeName.FILTER_BY_SUB_CATEGORIES,
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
          inputRef={checkRef}
        />
      }
      label={category}
    />
  );
};
