/* eslint-disable react-refresh/only-export-components */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";
import { ActionType, FilterStateType } from "./ActionType";
import { filterReducer, initialFilterValue } from "./reducer";

type BooksProviderType = {
  children: ReactNode;
};

type ContextType = {
  openRegister: boolean;
  setOpenRegister: Dispatch<SetStateAction<boolean>>;
  filterBooks: FilterStateType;
  dispatchFilter: Dispatch<ActionType>;
};

const BooksContext = createContext<ContextType>({
  openRegister: false,
  setOpenRegister: () => void {},
  filterBooks: initialFilterValue,
  dispatchFilter: () => void {},
});

const useBooks = () => {
  return useContext(BooksContext);
};

export default function BooksProvider({ children }: BooksProviderType) {
  const [openRegister, setOpenRegister] = useState(false);
  const [filterBooks, dispatchFilter] = useReducer(
    filterReducer,
    initialFilterValue
  );

  const value = useMemo(
    () => ({
      openRegister,
      setOpenRegister,
      filterBooks,
      dispatchFilter,
    }),
    [filterBooks, openRegister]
  );

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

export { useBooks };
