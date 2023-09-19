import { Prettify } from "./Books";

type OrderType = {
  author: string;
  title: string;
  price: number;
  img: string;
  quantity: number;
};

type Orders = {
  [key: string]: Order[];
};

type OrderDetailsType = {
  createdAt: Date;
  orders: Orders;
  totalPrice: number;
  updatedAt: Date;
  userId: string;
  _id: string;
};

export type Order = Prettify<OrderType>;
export type OrderDetails = Prettify<OrderDetailsType>;
