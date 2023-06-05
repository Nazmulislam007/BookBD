/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext } from "react";

type BooksProviderType = {
  children: ReactNode;
};

const BooksContext = createContext({});

const useBooks = () => {
  return useContext(BooksContext);
};

export default function BooksProvider({ children }: BooksProviderType) {
  const value = {};

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

export { useBooks };
