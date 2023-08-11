import { SortedBy } from "@/Types/Books";
import { ActionType, ActionTypeName, SortedStateType } from "./ActionType";

export const initialSortedValue: SortedStateType = {
  sortBy: SortedBy.MOST_RELEVANT,
  filterByAuthors: [],
  filterByCategories: [],
  filterBySubCategories: [],
};

export const sortedReducer = (
  state: SortedStateType,
  { type, payload }: ActionType
): SortedStateType => {
  switch (type) {
    case ActionTypeName.SORTED_BY: {
      return {
        ...state,
        sortBy: payload as string,
      };
    }
    case ActionTypeName.FILTER_BY_AUTHORS: {
      if (payload && typeof payload === "object") {
        if (payload.isChecked) {
          return {
            ...state,
            filterByAuthors: [...state.filterByAuthors, payload.value],
          };
        } else {
          return {
            ...state,
            filterByAuthors: state.filterByAuthors.filter(
              (elem) => elem !== payload.value
            ),
          };
        }
      }
      return state;
    }
    case ActionTypeName.FILTER_BY_CATEGORIES: {
      if (payload && typeof payload === "object") {
        if (payload.isChecked) {
          return {
            ...state,
            filterByCategories: [...state.filterByCategories, payload.value],
          };
        } else {
          return {
            ...state,
            filterByCategories: state.filterByCategories.filter(
              (elem) => elem !== payload.value
            ),
          };
        }
      }
      return state;
    }
    case ActionTypeName.FILTER_BY_SUB_CATEGORIES: {
      if (payload && typeof payload === "object") {
        if (payload.isChecked) {
          return {
            ...state,
            filterBySubCategories: [
              ...state.filterBySubCategories,
              payload.value,
            ],
          };
        } else {
          return {
            ...state,
            filterBySubCategories: state.filterBySubCategories.filter(
              (elem) => elem !== payload.value
            ),
          };
        }
      }
      return state;
    }
    default:
      return state;
  }
};
