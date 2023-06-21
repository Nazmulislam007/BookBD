/* eslint-disable @typescript-eslint/no-explicit-any */

export enum ActionTypeName {
  SORTED_BY = "books/sorted-by",
  FILTER_BY_AUTHOR = "book/filterByAuthor",
}

export type SortedStateType = {
  sortBy: string;
  filterByAuthor: string[];
};

export type ActionType = {
  type: ActionTypeName.SORTED_BY | ActionTypeName.FILTER_BY_AUTHOR;
  payload?: string | { value: string; isChecked: boolean };
};
