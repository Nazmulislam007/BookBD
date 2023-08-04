import { Books } from "@/Types/Books";
import Loading from "@/components/Loading";
import { useHomeBooks } from "@/hooks/useBooks";
import Bannner from "./components/Bannner";
import BooksWeLove from "./components/BooksWeLove";
import Top50Books from "./components/Top50Books";

type HomeBooksType = {
  booksWeLove: Partial<Books>[];
  top50Books: Partial<Books>[];
  upto75: Partial<Books>[];
};

export default function Home() {
  const { isLoading, isError, data } = useHomeBooks();

  if (isLoading) return <Loading />;

  if (isError) return <span>Error: </span>;

  const { booksWeLove, top50Books, upto75 }: HomeBooksType = data;

  return (
    <>
      <Bannner books={upto75} />
      <BooksWeLove books={booksWeLove} />
      <Top50Books books={top50Books} />
    </>
  );
}
