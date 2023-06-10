/* eslint-disable @typescript-eslint/no-explicit-any */

export enum ActionTypeName {
  SORTED_BY = "books/sorted-by",
}

export type FilterStateType = {
  sortBy: string;
};

export type ActionType = {
  type: ActionTypeName.SORTED_BY;
  payload?: string;
};
