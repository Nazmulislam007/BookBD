/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

export enum ActionTypeName {
  SORTED_BY = "books/sorted-by",
  FILTER_BY_AUTHOR = "book/filterByAuthor",
  FILTER_BY_CATEGORY = "book/filterByCategory",
}

export type SortedStateType = {
  sortBy: string;
  filterByAuthor: string[];
  filterByCategory: string[];
};

export type ContextType = {
  openRegister: boolean;
  setOpenRegister: Dispatch<SetStateAction<boolean>>;
  sortedBooks: SortedStateType;
  dispatchSort: Dispatch<ActionType>;
  sortedPrice: number[];
  setSortedPrice: Dispatch<SetStateAction<number[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export type ActionType = {
  type:
    | ActionTypeName.SORTED_BY
    | ActionTypeName.FILTER_BY_AUTHOR
    | ActionTypeName.FILTER_BY_CATEGORY;
  payload?: string | { value: string; isChecked: boolean };
};
