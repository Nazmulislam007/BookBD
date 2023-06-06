import useBooks from "@/hooks/data/useBooks";
import Bannner from "./components/Bannner";
import BooksWeLove from "./components/BooksWeLove";
import Top10Books from "./components/Top10Books";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLoading, isError, data } = useBooks();

  console.log(data);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: </span>;
  }

  return (
    <>
      <Bannner />
      <BooksWeLove />
      <Top10Books />
    </>
  );
}
