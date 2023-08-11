/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

export enum ActionTypeName {
  SORTED_BY = "books/sorted-by",
  FILTER_BY_AUTHORS = "book/Authors",
  FILTER_BY_CATEGORIES = "book/categories",
  FILTER_BY_SUB_CATEGORIES = "book/sub_categories",
  FILTER_BY_PRICE_RANGE = "book/price_range",
}

export type SortedStateType = {
  sortBy: string;
  filterByAuthors: string[];
  filterByCategories: string[];
  filterBySubCategories: string[];
};

export type ContextType = {
  openRegister: boolean;
  setOpenRegister: Dispatch<SetStateAction<boolean>>;
  sortedBooks: SortedStateType;
  dispatchSort: Dispatch<ActionType>;
  filterPrice: number[];
  setSetFilterPrice: Dispatch<SetStateAction<number[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export type ActionType = {
  type:
    | ActionTypeName.SORTED_BY
    | ActionTypeName.FILTER_BY_AUTHORS
    | ActionTypeName.FILTER_BY_CATEGORIES
    | ActionTypeName.FILTER_BY_SUB_CATEGORIES;
  payload?: string | { value: string; isChecked: boolean };
};
