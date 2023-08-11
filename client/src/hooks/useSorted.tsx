import { Books, SortedBy } from "@/Types/Books";
import { useBooks } from "@/context/BooksProvider/BooksProvider";

type SortedType = {
  books: Partial<Books>[];
};

export default function useSorted({ books }: SortedType) {
  const { sortedBooks, sortedPrice } = useBooks();

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

  if (sortedBooks.filterByAuthor.length > 0) {
    return updatedBooks.filter((book) =>
      sortedBooks.filterByAuthor.some((filterAuthor) =>
        book.authors?.some((author) => filterAuthor === author)
      )
    );
  }

  if (sortedBooks.filterByCategory.length > 0) {
    return updatedBooks.filter((book) =>
      sortedBooks.filterByCategory.some(
        (filterCategory) =>
          book.catagories?.some((category) => filterCategory === category) ||
          book.subCatagory?.some((sub) => sub === filterCategory)
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
