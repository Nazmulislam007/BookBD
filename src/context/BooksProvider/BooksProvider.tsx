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
import { ActionType, SortedStateType } from "./ActionType";
import { initialSortedValue, sortedReducer } from "./reducer";

type BooksProviderType = {
  children: ReactNode;
};

type ContextType = {
  openRegister: boolean;
  setOpenRegister: Dispatch<SetStateAction<boolean>>;
  sortedBooks: SortedStateType;
  dispatchSort: Dispatch<ActionType>;
  sortedPrice: number[];
  setSortedPrice: Dispatch<SetStateAction<number[]>>;
};

const BooksContext = createContext<ContextType>({
  openRegister: false,
  setOpenRegister: () => void {},
  sortedBooks: initialSortedValue,
  dispatchSort: () => void {},
  sortedPrice: [0, 100],
  setSortedPrice: () => void {},
});

const useBooks = () => {
  return useContext(BooksContext);
};

export default function BooksProvider({ children }: BooksProviderType) {
  const [sortedPrice, setSortedPrice] = useState<number[]>([0, 100]);
  const [openRegister, setOpenRegister] = useState(false);
  const [sortedBooks, dispatchSort] = useReducer(
    sortedReducer,
    initialSortedValue
  );

  const value = useMemo(
    () => ({
      openRegister,
      setOpenRegister,
      sortedBooks,
      dispatchSort,
      sortedPrice,
      setSortedPrice,
    }),
    [sortedBooks, openRegister, sortedPrice]
  );

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

export { useBooks };
