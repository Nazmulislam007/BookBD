import BodyWrapper from "@/Layouts/BodyWrapper";
import Book from "@/pages/Book";
import Categories from "@/pages/Categories";
import Home from "@/pages/Home";
import Order from "@/pages/Order";
import ShoppingCart from "@/pages/ShoppingCart";
import Subjects from "@/pages/Subjects";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <BodyWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/s/:subject",
        element: <Subjects />,
      },
      { path: "/categories", element: <Categories /> },
      {
        path: "/b/:id",
        element: <Book />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "/order-completed",
        element: <Order />,
      },
    ],
  },
]);
