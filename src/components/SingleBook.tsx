import { Books } from "@/Types/Books";
import { useNavigate } from "react-router-dom";
import Image from "./Image";

export default function SingleBook({ book }: { book: Partial<Books> }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/b/${book.id}`)}>
      <Image
        style={{ display: "block", width: "100%", height: "270px" }}
        bookId={book.id || ""}
        author={(book.authors && book.authors[0]) || ""}
        price={book.saleInfo?.discountPrice || 0}
        title={book.title || ""}
        src={book.imageLinks?.thumbnail || ""}
        alt="book"
      />
    </div>
  );
}
