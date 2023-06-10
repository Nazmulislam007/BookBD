export type Books = {
  id: string;
  title: string;
  authors: string[];
  publishedDate: string;
  description: string;
  pageCount: number;
  categories: string[];
  subCatagory: string[];
  imageLinks: {
    thumbnail: string;
  };
  language: string;
  saleInfo: {
    country: string;
    price: number;
    discountPrice: number;
    availableCopy: number;
    totalSales: number;
    upto75off: boolean;
  };
};

export enum SortedBy {
  MOST_RELEVANT = "Most relevant",
  POPULARTIY = "Sort by popularity",
  LOW_TO_HIGH = "Sort by price: low to high",
  HIGH_TO_LOW = "Sort by price: high to low",
}

// export type Prettify<T> = {
//   [K in keyof T]: T[K];
// } & object;
