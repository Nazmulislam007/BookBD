import useBooks from "@/hooks/useBooks";
import Bannner from "./components/Bannner";
import BooksWeLove from "./components/BooksWeLove";
import Top10Books from "./components/Top10Books";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLoading, isError, data } = useBooks();

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>Error: </span>;

  return (
    <>
      <Bannner />
      <BooksWeLove />
      <Top10Books />
    </>
  );
}
