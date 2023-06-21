import { SortedBy } from "@/Types/Books";
import { ActionType, ActionTypeName, SortedStateType } from "./ActionType";

export const initialSortedValue: SortedStateType = {
  sortBy: SortedBy.MOST_RELEVANT,
  filterByAuthor: [],
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
    case ActionTypeName.FILTER_BY_AUTHOR: {
      if (payload && typeof payload === "object") {
        if (payload.isChecked) {
          return {
            ...state,
            filterByAuthor: [...state.filterByAuthor, payload.value],
          };
        } else {
          return {
            ...state,
            filterByAuthor: state.filterByAuthor.filter(
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
