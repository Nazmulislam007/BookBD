import { Books, SortedBy } from "@/Types/Books";
import { useBooks } from "@/context/BooksProvider/BooksProvider";

type SortedType = {
  books: Partial<Books>[];
};

export default function useSorted({ books }: SortedType) {
  const { sortedBooks } = useBooks();

  let updatedBooks: Partial<Books>[];

  switch (sortedBooks.sortBy) {
    case SortedBy.MOST_RELEVANT: {
      updatedBooks = books.sort(
        (a, b) =>
          new Date(a.publishedDate || "").valueOf() -
          new Date(b.publishedDate || "").valueOf()
      );
      break;
    }
    case SortedBy.POPULARTIY: {
      updatedBooks = books.sort(
        (a, b) => (b.saleInfo?.totalSales || 0) - (a.saleInfo?.totalSales || 0)
      );
      break;
    }
    case SortedBy.LOW_TO_HIGH: {
      updatedBooks = books.sort(
        (a, b) =>
          (a.saleInfo?.discountPrice || 0) - (b.saleInfo?.discountPrice || 0)
      );
      break;
    }
    case SortedBy.HIGH_TO_LOW: {
      updatedBooks = books.sort(
        (a, b) =>
          (b.saleInfo?.discountPrice || 0) - (a.saleInfo?.discountPrice || 0)
      );
      break;
    }
    default: {
      updatedBooks = books;
    }
  }

  return updatedBooks;
}
