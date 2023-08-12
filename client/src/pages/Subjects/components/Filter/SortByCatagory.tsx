import { ActionTypeName } from "@/context/BooksProvider/ActionType";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React, { useEffect } from "react";
import { UseQueryResult } from "react-query";

export default function SortByCategories({
  totalCatagory,
  cate,
  refetch,
}: {
  totalCatagory: string[];
  cate: boolean;
  refetch: () => Promise<UseQueryResult>;
}) {
  return (
    <FormGroup>
      {totalCatagory.map((category, i) => (
        <SortByCategory
          key={i}
          category={category}
          cate={cate}
          refetch={refetch}
        />
      ))}
    </FormGroup>
  );
}

const SortByCategory = ({
  category,
  cate,
  refetch,
}: {
  cate: boolean;
  category: string;
  refetch: () => Promise<UseQueryResult>;
}) => {
  const { dispatchSort, sortedBooks, setChangeCache, changeCache } = useBooks();
  const [checked, setChecked] = React.useState<boolean>(false);

  useEffect(() => {
    if (sortedBooks.filterByCategories.length > 0 && cate)
      dispatchSort({
        type: cate
          ? ActionTypeName.FILTER_BY_CATEGORIES
          : ActionTypeName.FILTER_BY_SUB_CATEGORIES,
        payload: {
          value: sortedBooks.filterByCategories,
          isChecked: "initialUpdate",
        },
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cate, changeCache]);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);

    if (e.target.checked && cate) {
      refetch();
      setChangeCache(e.target.value);
    }

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
        />
      }
      label={category}
    />
  );
};
