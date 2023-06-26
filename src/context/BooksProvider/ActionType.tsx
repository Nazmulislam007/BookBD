/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

export enum ActionTypeName {
  SORTED_BY = "books/sorted-by",
  FILTER_BY_AUTHOR = "book/filterByAuthor",
}

export type SortedStateType = {
  sortBy: string;
  filterByAuthor: string[];
};

export type ContextType = {
  openRegister: boolean;
  setOpenRegister: Dispatch<SetStateAction<boolean>>;
  sortedBooks: SortedStateType;
  dispatchSort: Dispatch<ActionType>;
  sortedPrice: number[];
  setSortedPrice: Dispatch<SetStateAction<number[]>>;
  filterCata: string;
  setFilterCata: Dispatch<SetStateAction<string>>;
};

export type ActionType = {
  type: ActionTypeName.SORTED_BY | ActionTypeName.FILTER_BY_AUTHOR;
  payload?: string | { value: string; isChecked: boolean };
};
