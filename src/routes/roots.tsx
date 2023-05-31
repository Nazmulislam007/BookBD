import Book from "@/pages/Book";
import Home from "@/pages/Home";
import ShoppingCart from "@/pages/ShoppingCart";
import Subjects from "@/pages/Subjects";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/subjects",
    element: <Subjects />,
  },
  {
    path: "/book",
    element: <Book />,
  },
  {
    path: "/shopping-cart",
    element: <ShoppingCart />,
  },
]);
