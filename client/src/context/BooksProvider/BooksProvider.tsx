/* eslint-disable react-refresh/only-export-components */
import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";
import { ContextType } from "./ActionType";
import { initialSortedValue, sortedReducer } from "./reducer";

type BooksProviderType = {
  children: ReactNode;
};

const BooksContext = createContext<ContextType>({
  openRegister: false,
  setOpenRegister: () => void {},
  sortedBooks: initialSortedValue,
  dispatchSort: () => void {},
  filterPrice: [0, 100],
  setSetFilterPrice: () => void {},
  search: "",
  setSearch: () => void {},
  changeCache: "",
  setChangeCache: () => void {},
});

const useBooks = () => {
  return useContext(BooksContext);
};

export default function BooksProvider({ children }: BooksProviderType) {
  const [changeCache, setChangeCache] = useState("subjective-books");
  const [filterPrice, setSetFilterPrice] = useState<number[]>([0, 100]);
  const [openRegister, setOpenRegister] = useState(false);
  const [search, setSearch] = useState("");
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
      filterPrice,
      setSetFilterPrice,
      search,
      setSearch,
      changeCache,
      setChangeCache,
    }),
    [sortedBooks, openRegister, filterPrice, search, changeCache]
  );

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

export { useBooks };
