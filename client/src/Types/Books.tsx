export type Books = {
  _id: string;
  title: string;
  authors: string[];
  publishedDate: string;
  description: string;
  pageCount: number;
  catagories: string[];
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

export type CartBookType = {
  _id: string;
  title: string;
  author: string;
  price: number;
  img: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  totalPrice: number;
};

export type RegisterType = {
  username: string;
  email: string;
  password: string;
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
