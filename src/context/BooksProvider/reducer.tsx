import { SortedBy } from "@/Types/Books";
import { ActionType, ActionTypeName, FilterStateType } from "./ActionType";

export const initialFilterValue: FilterStateType = {
  sortBy: SortedBy.MOST_RELEVANT,
};

export const filterReducer = (
  state: FilterStateType,
  { type, payload }: ActionType
): FilterStateType => {
  switch (type) {
    case ActionTypeName.SORTED_BY: {
      return {
        ...state,
        sortBy: payload as string,
      };
    }
    default:
      return state;
  }
};
