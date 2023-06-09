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

// export type Prettify<T> = {
//   [K in keyof T]: T[K];
// } & object;
