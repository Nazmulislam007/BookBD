import { Books } from "@/Types/Books";
import { useNavigate } from "react-router-dom";
import Image from "./Image";

export default function SingleBook({
  book,
  rM,
}: {
  book: Partial<Books>;
  rM?: boolean;
}) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/b/${book._id}`)}>
      <Image
        style={{ display: "block", width: "100%", height: "270px" }}
        bookId={book._id || ""}
        author={(book.authors && book.authors[0]) || ""}
        price={book.saleInfo?.discountPrice || 0}
        title={book.title || ""}
        src={book.image || ""}
        rM={rM}
        alt="book"
      />
    </div>
  );
}
