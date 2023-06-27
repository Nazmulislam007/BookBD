import { Books, SortedBy } from "@/Types/Books";
import { useBooks } from "@/context/BooksProvider/BooksProvider";

type SortedType = {
  newBooks: Partial<Books>[];
};

export default function useSorted({ newBooks }: SortedType) {
  const { sortedBooks, sortedPrice, filterCata } = useBooks();

  let updatedBooks: Partial<Books>[];

  switch (sortedBooks.sortBy) {
    case SortedBy.MOST_RELEVANT: {
      updatedBooks = newBooks.sort(
        (a, b) =>
          new Date(a.publishedDate || "").valueOf() -
          new Date(b.publishedDate || "").valueOf()
      );
      break;
    }
    case SortedBy.POPULARTIY: {
      updatedBooks = newBooks.sort(
        (a, b) => (b.saleInfo?.totalSales || 0) - (a.saleInfo?.totalSales || 0)
      );
      break;
    }
    case SortedBy.LOW_TO_HIGH: {
      updatedBooks = newBooks.sort(
        (a, b) =>
          (a.saleInfo?.discountPrice || 0) - (b.saleInfo?.discountPrice || 0)
      );
      break;
    }
    case SortedBy.HIGH_TO_LOW: {
      updatedBooks = newBooks.sort(
        (a, b) =>
          (b.saleInfo?.discountPrice || 0) - (a.saleInfo?.discountPrice || 0)
      );
      break;
    }
    default: {
      updatedBooks = newBooks;
    }
  }

  if (filterCata !== "") {
    return updatedBooks.filter(
      (book) =>
        book.catagories?.includes(filterCata) ||
        book.subCatagory?.includes(filterCata)
    );
  }

  if (sortedBooks.filterByAuthor.length > 0) {
    return updatedBooks.filter((book) =>
      sortedBooks.filterByAuthor.some((filterAuthor) =>
        book.authors?.some((author) => filterAuthor === author)
      )
    );
  }

  if (sortedPrice) {
    return updatedBooks.filter(
      (book) =>
        (book.saleInfo?.discountPrice || 0) > sortedPrice[0] &&
        (book.saleInfo?.discountPrice || 100) < sortedPrice[1]
    );
  }

  return updatedBooks;
}
